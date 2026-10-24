"use client";

import { Moon, Sun } from "@phosphor-icons/react";
import { useRef, useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
    function syncStorage(event: StorageEvent) {
        if (event.key !== "portfolio-theme" && event.key !== null) return;
        const theme = event.newValue === "light" ? "light" : "dark";
        document.documentElement.dataset.theme = theme;
        document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "light" ? "#fafafa" : "#0b0b0b");
        onChange();
    }

    window.addEventListener("portfolio-theme-change", onChange);
    window.addEventListener("storage", syncStorage);
    return () => {
        window.removeEventListener("portfolio-theme-change", onChange);
        window.removeEventListener("storage", syncStorage);
    };
}

function getSnapshot() {
    return document.documentElement.dataset.theme === "light";
}

function getServerSnapshot() {
    return false;
}

export default function ThemeToggle() {
    const isLight = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    const transitionInProgress = useRef(false);

    function applyTheme() {
        const theme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
        document.documentElement.dataset.theme = theme;
        document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "light" ? "#fafafa" : "#0b0b0b");
        try {
            localStorage.setItem("portfolio-theme", theme);
        } catch {
            // The toggle still works when browser storage is unavailable.
        }
        window.dispatchEvent(new Event("portfolio-theme-change"));
    }

    function toggleTheme(event: React.MouseEvent<HTMLButtonElement>) {
        if (transitionInProgress.current) return;

        if (!document.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            applyTheme();
            return;
        }

        const bounds = event.currentTarget.getBoundingClientRect();
        const x = bounds.left + bounds.width / 2;
        const y = bounds.top + bounds.height / 2;
        const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

        transitionInProgress.current = true;
        document.documentElement.classList.add("theme-transition");
        const transition = document.startViewTransition(applyTheme);

        transition.ready.then(() => {
            document.documentElement.animate(
                { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
                { duration: 600, easing: "cubic-bezier(0.22, 1, 0.36, 1)", pseudoElement: "::view-transition-new(root)" },
            );
        }, () => {});

        transition.finished.then(() => {
            document.documentElement.classList.remove("theme-transition");
            transitionInProgress.current = false;
        }, () => {
            document.documentElement.classList.remove("theme-transition");
            transitionInProgress.current = false;
        });
    }

    return (
        <button
            type="button"
            className="inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-md border border-line bg-surface text-muted transition-colors hover:border-strong-line hover:bg-surface-soft hover:text-ink"
            aria-label="Light mode"
            aria-pressed={isLight}
            title={isLight ? "Switch to dark mode" : "Switch to light mode"}
            onClick={toggleTheme}
        >
            <Sun className="theme-toggle__sun" size={18} aria-hidden="true" />
            <Moon className="theme-toggle__moon" size={18} aria-hidden="true" />
        </button>
    );
}
