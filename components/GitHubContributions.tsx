"use client";

import { useEffect, useState } from "react";

type Contribution = {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
};

type CalendarState =
    | { status: "loading" | "error" }
    | { status: "ready"; contributions: Contribution[]; total: number };

const username = "madvillax";
const colors = Array.from({ length: 5 }, (_, level) => `var(--contribution-${level})`);
const dateFormatter = new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
});
const monthFormatter = new Intl.DateTimeFormat("en", { month: "short", timeZone: "UTC" });

function Calendar({ contributions, total }: { contributions: Contribution[]; total: number }) {
    const offset = new Date(`${contributions[0].date}T00:00:00Z`).getUTCDay();
    const days: (Contribution | null)[] = [...Array<null>(offset).fill(null), ...contributions];
    const weeks = Array.from({ length: Math.ceil(days.length / 7) }, (_, index) => days.slice(index * 7, index * 7 + 7));
    const width = weeks.length * 14 + 28;

    return (
        <div className="overflow-x-auto pb-1" tabIndex={0} role="region" aria-label="GitHub contribution calendar, scroll horizontally to see the full year">
            <svg className="block w-full min-w-[700px]" viewBox={`0 0 ${width} 123`} role="img" aria-labelledby="contribution-calendar-title contribution-calendar-description">
                <title id="contribution-calendar-title">{total.toLocaleString("en-US")} GitHub contributions in the last year</title>
                <desc id="contribution-calendar-description">Daily contributions by {username}. Brighter green squares indicate more contributions. Hover over a square for its date and count.</desc>
                {["Mon", "Wed", "Fri"].map((day, index) => (
                    <text key={day} x="0" y={41 + index * 28} fill="var(--faint)" fontSize="9">{day}</text>
                ))}
                {weeks.map((week, weekIndex) => {
                    const firstDay = week.find((day) => day !== null);
                    const previousWeek = weeks[weekIndex - 1];
                    const previousDay = previousWeek?.find((day) => day !== null);
                    const month = firstDay?.date.slice(0, 7);
                    const showMonth = firstDay && month !== previousDay?.date.slice(0, 7) && weekIndex < weeks.length - 2;

                    return (
                        <g key={firstDay?.date ?? weekIndex} transform={`translate(${28 + weekIndex * 14}, 0)`}>
                            {showMonth ? <text x="0" y="10" fill="var(--faint)" fontSize="9">{monthFormatter.format(new Date(`${firstDay.date}T00:00:00Z`))}</text> : null}
                            {week.map((day, dayIndex) => day ? (
                                <rect key={day.date} x="0" y={20 + dayIndex * 14} width="10" height="10" rx="2" fill={colors[day.level]}>
                                    <title>{day.count} {day.count === 1 ? "contribution" : "contributions"} on {dateFormatter.format(new Date(`${day.date}T00:00:00Z`))}</title>
                                </rect>
                            ) : null)}
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}

export default function GitHubContributions() {
    const [state, setState] = useState<CalendarState>({ status: "loading" });
    const [attempt, setAttempt] = useState(0);

    useEffect(() => {
        const controller = new AbortController();
        let disposed = false;
        const timeout = window.setTimeout(() => controller.abort(), 15000);

        async function loadContributions() {
            try {
                // Public contribution data; no token or server route is required.
                const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`, { signal: controller.signal });
                if (!response.ok) throw new Error("Could not load contributions");

                const data = await response.json();
                if (!Array.isArray(data.contributions) || !data.contributions.length) throw new Error("No contribution data");

                const contributions: Contribution[] = data.contributions;
                if (!contributions.every((day) =>
                    typeof day.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(day.date) &&
                    Number.isFinite(new Date(`${day.date}T00:00:00Z`).getTime()) &&
                    Number.isInteger(day.count) && day.count >= 0 &&
                    Number.isInteger(day.level) && day.level >= 0 && day.level <= 4
                )) throw new Error("Invalid contribution data");

                contributions.sort((a, b) => a.date.localeCompare(b.date));
                const total = contributions.reduce((sum, day) => sum + day.count, 0);
                if (!disposed) setState({ status: "ready", contributions, total });
            } catch {
                if (!disposed) setState({ status: "error" });
            } finally {
                window.clearTimeout(timeout);
            }
        }

        void loadContributions();
        return () => {
            disposed = true;
            window.clearTimeout(timeout);
            controller.abort();
        };
    }, [attempt]);

    return (
        <section className="mt-7 border-t border-line pt-5" aria-labelledby="github-activity-title">
            <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h2 id="github-activity-title" className="m-0 text-[11px] font-semibold">GitHub contributions</h2>
                <a className="text-[10px] font-semibold text-muted no-underline transition-colors hover:text-ink" href={`https://github.com/${username}`} target="_blank" rel="noreferrer">@{username}<span className="ml-1 text-faint" aria-hidden="true">↗</span></a>
            </div>
            <div className="min-h-[127px]">
                {state.status === "ready" ? <Calendar contributions={state.contributions} total={state.total} /> : (
                    <div className="flex min-h-[127px] flex-wrap content-center items-center gap-3 text-[11px] text-muted">
                        <p className="m-0" role="status">{state.status === "loading" ? "Loading GitHub activity…" : "GitHub activity is temporarily unavailable."}</p>
                        {state.status === "error" ? (
                            <button type="button" className="cursor-pointer rounded border border-line bg-surface-soft px-2.5 py-1 text-[10px] text-ink hover:border-strong-line" onClick={() => {
                                setState({ status: "loading" });
                                setAttempt((value) => value + 1);
                            }}>Retry</button>
                        ) : null}
                    </div>
                )}
            </div>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-[9px] text-faint">
                <span role="status">{state.status === "ready" ? `${state.total.toLocaleString("en-US")} contributions in the last year` : "Activity over the last year"}</span>
                <div className="flex items-center gap-1.5" aria-label="Contribution color scale, from less to more">
                    <span>Less</span>
                    {colors.map((color) => <span key={color} className="size-2.5 rounded-[2px]" style={{ backgroundColor: color }} aria-hidden="true" />)}
                    <span>More</span>
                </div>
            </div>
        </section>
    );
}
