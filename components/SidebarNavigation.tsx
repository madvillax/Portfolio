"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";

const links = [
    { label: "Work", href: "/#work" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
];

function subscribeToHash(onChange: () => void) {
    window.addEventListener("hashchange", onChange);
    window.addEventListener("popstate", onChange);
    window.addEventListener("portfolio-navigation", onChange);
    return () => {
        window.removeEventListener("hashchange", onChange);
        window.removeEventListener("popstate", onChange);
        window.removeEventListener("portfolio-navigation", onChange);
    };
}

function getHash() {
    return window.location.hash;
}

function getServerHash() {
    return "";
}

export default function SidebarNavigation() {
    const pathname = usePathname();
    const hash = useSyncExternalStore(subscribeToHash, getHash, getServerHash);
    const [pendingHash, setPendingHash] = useState<{ value: string; previous: string } | null>(null);
    const [hovered, setHovered] = useState<number | null>(null);
    const [focused, setFocused] = useState<number | null>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const indicatorRef = useRef<HTMLSpanElement>(null);
    const selectedHash = pendingHash && pendingHash.previous === hash ? pendingHash.value : hash;
    const activeIndex = links.findIndex((link) => pathname === "/"
        ? link.href === `/${selectedHash}` && selectedHash !== ""
        : !link.href.includes("#") && (pathname === link.href || pathname.startsWith(`${link.href}/`)));
    const highlightedIndex = hovered ?? focused ?? (activeIndex >= 0 ? activeIndex : null);

    useEffect(() => {
        window.dispatchEvent(new Event("portfolio-navigation"));
    }, [pathname]);

    useEffect(() => {
        function clearPendingHash() {
            setPendingHash(null);
        }

        window.addEventListener("hashchange", clearPendingHash);
        window.addEventListener("popstate", clearPendingHash);
        return () => {
            window.removeEventListener("hashchange", clearPendingHash);
            window.removeEventListener("popstate", clearPendingHash);
        };
    }, []);

    useEffect(() => {
        function syncHomeLink(event: MouseEvent) {
            if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !(event.target instanceof Element)) return;
            const link = event.target.closest("a[href]");
            if (!(link instanceof HTMLAnchorElement) || link.target === "_blank") return;
            const url = new URL(link.href);
            if (url.origin === window.location.origin && url.pathname === "/") {
                setPendingHash({ value: url.hash, previous: hash });
            }
        }

        document.addEventListener("click", syncHomeLink);
        return () => document.removeEventListener("click", syncHomeLink);
    }, [hash]);

    useLayoutEffect(() => {
        const list = listRef.current;
        const indicator = indicatorRef.current;
        if (!list || !indicator) return;

        function updateIndicator() {
            const item = highlightedIndex === null ? null : list?.querySelectorAll("li")[highlightedIndex];
            if (!item || !indicator) {
                if (indicator) indicator.style.opacity = "0";
                return;
            }
            indicator.style.width = `${item.offsetWidth}px`;
            indicator.style.height = `${item.offsetHeight}px`;
            indicator.style.transform = `translate(${item.offsetLeft}px, ${item.offsetTop}px)`;
            indicator.style.opacity = "1";
        }

        updateIndicator();
        const observer = new ResizeObserver(updateIndicator);
        observer.observe(list);
        return () => observer.disconnect();
    }, [highlightedIndex]);

    return (
        <nav className="sidebar-nav" aria-label="Primary navigation" onMouseLeave={() => setHovered(null)}>
            <span className="sidebar-nav__indicator" ref={indicatorRef} aria-hidden="true" />
            <ul className="sidebar-nav__list" ref={listRef}>
                {links.map((link, index) => (
                    <li className="sidebar-nav__item" key={link.href}>
                        <Link
                            className="sidebar-nav__link"
                            href={link.href}
                            aria-current={activeIndex === index ? (link.href.includes("#") ? "location" : "page") : undefined}
                            onMouseEnter={() => setHovered(index)}
                            onFocus={() => setFocused(index)}
                            onBlur={() => setFocused(null)}
                            onClick={() => {
                                const nextHash = link.href.startsWith("/#") ? link.href.slice(1) : "";
                                setPendingHash({ value: nextHash, previous: hash });
                            }}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
