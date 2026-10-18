import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";

export const metadata: Metadata = {
    title: "Blog | Mohit Sharma",
    description: "Writing about building AI applications, learning in public, and understanding how things work under the hood.",
    openGraph: {
        title: "Blog | Mohit Sharma",
        description: "Writing about building AI applications and understanding how things work under the hood.",
        type: "website",
    },
};

export default function BlogPage() {
    return (
        <div>
            <header className="blog-header">
                <Link className="blog-back" href="/"><ArrowLeft size={14} aria-hidden="true" /> Home</Link>
                <p className="blog-eyebrow">Writing</p>
                <h1 className="blog-title">Blog</h1>
                <p className="blog-deck">Things I’m learning, building, and figuring out along the way.</p>
            </header>
            <section className="blog-index" aria-label="Blog posts">
                <article>
                    <Link className="blog-entry group" href="/blog/how-do-i-get-my-hands-dirty-with-rag-applications-part-1">
                        <div className="blog-entry-meta"><span>AI Engineering</span><span>RAG / Part 1</span></div>
                        <div>
                            <h2>How do I get my hands dirty with RAG applications?</h2>
                            <p>My journey into RAG: the core components, how indexing and querying work, and why I’m building Convo from scratch.</p>
                            <span className="blog-read">Read article <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
                        </div>
                    </Link>
                </article>
            </section>
        </div>
    );
}
