import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import ProjectCard from "@/components/ProjectCard";
import { projects, type Project } from "@/data/projects";

export function ProjectList({ items }: { items: Project[] }) {
    return (
        <div className="project-grid">
            {items.map((project, index) => <ProjectCard key={project.id} project={project} lead={index === 0 && items.length % 2 === 1} />)}
        </div>
    );
}

export default function ProjectsSection() {
    return (
        <section className="border-b border-line px-9 py-12 max-[760px]:px-5 max-[760px]:py-9" id="work" aria-labelledby="selected-projects">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-x-6 gap-y-5">
                <div>
                    <div className="flex items-center gap-3">
                        <h2 className="m-0 font-sans text-[26px] leading-tight font-semibold tracking-[-0.045em]" id="selected-projects">Projects</h2>
                        <span className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] leading-none text-muted" aria-label={`${projects.length} projects`}>{projects.length}</span>
                    </div>
                    <p className="mt-2 mb-0 max-w-[500px] text-[12px] leading-relaxed text-muted">AI products, developer tools, and interfaces built around real problems.</p>
                </div>
                <Link className="inline-flex min-h-9 items-center gap-2 rounded-md border border-strong-line bg-surface px-3 text-[11px] font-medium text-ink no-underline transition-colors hover:bg-surface-soft" href="/projects">All projects <ArrowRight size={14} aria-hidden="true" /></Link>
            </div>
            <ProjectList items={projects} />
        </section>
    );
}
