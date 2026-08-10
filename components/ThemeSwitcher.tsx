"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";
type ThemeOrigin = { x: number; y: number };
type DocumentWithViewTransition = Document & {
    startViewTransition?: (updateCallback: () => void) => { ready: Promise<void> };
};

const themeEvent = "portfolio-theme-change";

function getThemeSnapshot(): Theme {
    const savedTheme = localStorage.getItem("portfolio-theme");
    return savedTheme === "light" ? "light" : "dark";
}

function subscribeToTheme(onStoreChange: () => void) {
    window.addEventListener(themeEvent, onStoreChange);
    window.addEventListener("storage", onStoreChange);

    return () => {
        window.removeEventListener(themeEvent, onStoreChange);
        window.removeEventListener("storage", onStoreChange);
    };
}

function setThemePreference(nextTheme: Theme, origin: ThemeOrigin) {
    const updateTheme = () => {
        localStorage.setItem("portfolio-theme", nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
        window.dispatchEvent(new Event(themeEvent));
    };

    const viewDocument = document as DocumentWithViewTransition;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!viewDocument.startViewTransition || reduceMotion) {
        updateTheme();
        return;
    }

    const transition = viewDocument.startViewTransition(updateTheme);
    transition.ready.then(() => {
        const radius = Math.hypot(
            Math.max(origin.x, window.innerWidth - origin.x),
            Math.max(origin.y, window.innerHeight - origin.y),
        );

        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${origin.x}px ${origin.y}px)`,
                    `circle(${radius}px at ${origin.x}px ${origin.y}px)`,
                ],
            },
            {
                duration: 480,
                easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                pseudoElement: "::view-transition-new(root)",
            },
        );
    }).catch(() => undefined);
}

export default function ThemeSwitcher() {
    const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, () => "dark");
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    return (
        <div className="theme-switcher" role="group" aria-label="Colour theme">
            <button
                className="theme-toggle"
                type="button"
                aria-label={`Switch to ${nextTheme} theme`}
                title={`Switch to ${nextTheme} theme`}
                onClick={(event) => setThemePreference(nextTheme, { x: event.clientX, y: event.clientY })}
            >
                <span className="theme-toggle-icon" aria-hidden="true">{theme === "dark" ? "☼" : "☾"}</span>
                <span>{nextTheme}</span>
            </button>
        </div>
    );
}
