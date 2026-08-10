import type { Metadata } from "next";
import Link from "next/link";
import { ProjectList } from "@/components/ProjectsSection";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
    title: "Mohit Sharma",
    description: "Selected AI, full-stack, and frontend projects by Mohit Sharma.",
};

export default function ProjectsPage() {
    return (
        <div>
            <header className="border-b border-line px-9 pt-[38px] pb-[42px] max-[760px]:px-5">
                <Link className="mb-[34px] inline-block text-[10px] font-bold text-muted no-underline transition-colors hover:text-ink" href="/"><span aria-hidden="true">←</span> Home</Link>
                <p className="mt-0 mb-[9px] text-[9px] font-bold tracking-[0.08em] text-faint uppercase">Work index</p>
                <h1 className="m-0 font-sans text-4xl leading-[1.1] font-semibold tracking-[-0.04em]">Projects</h1>
                <p className="mt-3 mb-0 max-w-[520px] text-xs text-muted">A focused collection of AI products, developer tools, and full-stack experiments.</p>
            </header>

            <section className="border-b border-line px-9 pt-[30px] pb-[42px] max-[760px]:px-5" aria-label="Project list">
                <ProjectList items={projects} />
            </section>

            <section className="flex items-center justify-between gap-6 border-b border-line px-9 py-[42px] max-[760px]:flex-col max-[760px]:items-start max-[760px]:px-5" aria-labelledby="project-contact-title">
                <div>
                    <p className="mt-0 mb-[9px] text-[9px] font-bold tracking-[0.08em] text-faint uppercase">Available for thoughtful work</p>
                    <h2 className="m-0 font-sans text-lg font-semibold tracking-[-0.03em]" id="project-contact-title">Want to build something together?</h2>
                </div>
                <a className="inline-flex min-h-[34px] items-center justify-center gap-1.5 rounded-[4px] border border-ink bg-ink px-[13px] py-[7px] text-[11px] font-bold text-button-ink no-underline transition-opacity hover:opacity-80 active:scale-[0.98] max-[390px]:px-[11px]" href="mailto:mohit.sharma80805@gmail.com">
                    Send an email <span aria-hidden="true">↗</span>
                </a>
            </section>
        </div>
    );
}
