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
        <section className="section reveal" aria-labelledby="stack-title">
            <div className="mb-7">
                <h2 className="section-title" id="stack-title">Working stack</h2>
                <p className="section-lede">Tools I use to move from idea to shipped product.</p>
            </div>
            <dl className="m-0 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line max-[760px]:grid-cols-1">
                {stack.map((group) => (
                    <div className="bg-surface p-5 max-[760px]:p-4" key={group.label}>
                        <dt className="font-mono text-[11px] font-semibold tracking-[0.06em] text-faint uppercase">{group.label}</dt>
                        <dd className="mt-4 mb-0">
                            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                                {group.tools.map((tool) => (
                                    <li className="inline-flex min-h-9 items-center gap-2 rounded-md border border-line bg-surface-soft px-3 py-1.5 text-[13px] font-medium leading-tight text-ink transition-colors hover:border-strong-line" key={tool.name}>
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
