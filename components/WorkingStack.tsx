import {
    siBaseui,
    siBun,
    siDrizzle,
    siFastapi,
    siNextdotjs,
    siNodedotjs,
    siPostgresql,
    siPython,
    siReact,
    siRedux,
    siSqlite,
    siTailwindcss,
    siTurso,
    siTypescript,
    siVercel,
} from "simple-icons";

const stack = [
    {
        label: "Core",
        tools: [
            { name: "TypeScript", icon: siTypescript },
            { name: "Python", icon: siPython },
            { name: "React", icon: siReact },
            { name: "Next.js", icon: siNextdotjs },
            { name: "Redux", icon: siRedux },
        ],
    },
    {
        label: "Backend",
        tools: [
            { name: "Bun.js", icon: siBun },
            { name: "Node.js", icon: siNodedotjs },
            { name: "FastAPI", icon: siFastapi },
            { name: "SQLite", icon: siSqlite },
            { name: "Turso", icon: siTurso },
            { name: "Drizzle", icon: siDrizzle },
            { name: "Postgres", icon: siPostgresql },
        ],
    },
    {
        label: "AI systems",
        tools: [
            { name: "Vercel AI SDK", icon: siVercel },
            { name: "Trigger.dev", icon: null },
            { name: "Vercel eve", icon: siVercel },
            { name: "mastra", icon: null },
        ],
    },
    {
        label: "Interface",
        tools: [
            { name: "Tailwind CSS", icon: siTailwindcss },
            { name: "base-ui", icon: siBaseui },
        ],
    },
];

export default function WorkingStack() {
    return (
        <section className="border-b border-line px-9 py-[42px] max-[760px]:px-5" aria-labelledby="stack-title">
            <div className="mb-[26px] grid grid-cols-[32px_minmax(0,1fr)] items-start gap-[13px]">
                <span className="grid size-8 place-items-center rounded-[2px] border border-line bg-surface-soft font-sans text-[13px]" aria-hidden="true">+</span>
                <div>
                    <h2 className="m-0 font-sans text-[17px] leading-[1.25] font-semibold tracking-[-0.03em]" id="stack-title">Working stack</h2>
                    <p className="mt-1 mb-0 text-[11px] text-muted">Tools I use to move from idea to shipped product.</p>
                </div>
            </div>
            <dl className="m-0 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line max-[760px]:grid-cols-1">
                {stack.map((group) => (
                    <div className="bg-surface p-5 max-[760px]:p-4" key={group.label}>
                        <dt className="font-mono text-[10px] font-semibold tracking-[0.06em] text-faint uppercase">{group.label}</dt>
                        <dd className="mt-4 mb-0">
                            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                                {group.tools.map((tool) => (
                                    <li className="inline-flex min-h-9 items-center gap-2 rounded-md border border-line bg-surface-soft px-2.5 py-1.5 text-[12px] font-medium leading-tight text-ink" key={tool.name}>
                                        {tool.icon && <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={tool.icon.path} /></svg>}
                                        {tool.name}
                                    </li>
                                ))}
                            </ul>
                        </dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}
