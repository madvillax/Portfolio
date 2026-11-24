import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { ProjectList } from "@/components/ProjectsSection";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
    title: "Mohit Sharma",
    description: "Selected AI, full-stack, and frontend projects by Mohit Sharma.",
};

export default function ProjectsPage() {
    return (
        <div>
            <header className="border-b border-line px-9 pt-8 pb-12 max-[760px]:px-5 max-[760px]:pb-9">
                <Link className="group mb-10 inline-flex min-h-8 items-center gap-2 text-[13px] font-medium text-muted no-underline transition-colors hover:text-ink" href="/"><ArrowLeft className="transition-transform duration-200 group-hover:-translate-x-0.5" size={14} aria-hidden="true" /> Home</Link>
                <p className="eyebrow intro-rise">Work index</p>
                <div className="intro-rise flex items-center gap-3.5" style={{ "--i": 1 } as React.CSSProperties}>
                    <h1 className="m-0 font-sans text-[clamp(34px,4vw,48px)] leading-[1.1] font-semibold tracking-[-0.05em]">Projects</h1>
                    <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[12px] leading-none text-muted" aria-label={`${projects.length} projects`}>{projects.length}</span>
                </div>
                <p className="intro-rise mt-4 mb-0 max-w-[52ch] text-[15px] leading-relaxed text-muted" style={{ "--i": 2 } as React.CSSProperties}>A focused collection of AI products, developer tools, and full-stack experiments.</p>
            </header>

            <section className="intro-rise border-b border-line px-9 py-10 max-[760px]:px-5 max-[760px]:py-6" style={{ "--i": 3 } as React.CSSProperties} aria-label="Project list">
                <ProjectList items={projects} />
            </section>

            <section className="section reveal flex items-center justify-between gap-6 max-[760px]:flex-col max-[760px]:items-start" aria-labelledby="project-contact-title">
                <div>
                    <p className="eyebrow">Available for thoughtful work</p>
                    <h2 className="section-title" id="project-contact-title">Want to build something together?</h2>
                </div>
                <a className="btn btn--primary" href="mailto:mohit.sharma80805@gmail.com">
                    Send an email <ArrowUpRight className="btn__arrow" size={14} aria-hidden="true" />
                </a>
            </section>
        </div>
    );
}
