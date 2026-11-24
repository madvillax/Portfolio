import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import ProjectCard from "@/components/ProjectCard";
import { projects, type Project } from "@/data/projects";

// Keep the homepage selection separate from the complete project archive.
const convo: Project = {
    id: 6,
    title: "Convo",
    description: "A local-first terminal RAG assistant that lets you select a file and chat with it, with answers grounded in your documents.",
    longDescription: "A local-first terminal RAG assistant for chatting with selected files.",
    tech: ["Python", "Textual", "PostgreSQL", "pgvector"],
    category: ["AI", "Developer Tools"],
    year: 2026,
    color: "#ffad00",
    accentColor: "#ffcf70",
    image: "/convo.png",
    link: "https://convo.bemohit.dev",
    github: "https://github.com/madvillax/convo",
    featured: true,
};

const homepageProjects = projects.map((project) => project.title === "Kropify" ? convo : project);

export function ProjectList({ items }: { items: Project[] }) {
    return (
        <div className="project-grid">
            {items.map((project, index) => <ProjectCard key={project.id} project={project} lead={index === 0 && items.length % 2 === 1} />)}
        </div>
    );
}

export default function ProjectsSection() {
    return (
        <section className="section reveal" id="work" aria-labelledby="selected-projects">
            <div className="mb-7 flex flex-wrap items-end justify-between gap-x-6 gap-y-5">
                <div>
                    <div className="flex items-center gap-2.5">
                        <h2 className="section-title" id="selected-projects">Projects</h2>
                        <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[11px] leading-[1.4] text-muted" aria-label={`${homepageProjects.length} projects`}>{homepageProjects.length}</span>
                    </div>
                    <p className="section-lede">AI products, developer tools, and interfaces built around real problems.</p>
                </div>
                <Link className="btn" href="/projects">All projects <ArrowRight className="btn__arrow btn__arrow--right" size={14} aria-hidden="true" /></Link>
            </div>
            <ProjectList items={homepageProjects} />
        </section>
    );
}
