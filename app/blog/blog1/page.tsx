import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr/ArrowLeft";

export const metadata: Metadata = {
    title: "How do I get my hands dirty with RAG applications? Part 1 | Mohit Sharma",
    description: "My RAG journey: understanding retrieval, indexing, embeddings, and the components behind Convo, a terminal-first RAG application built from scratch.",
    openGraph: {
        title: "How do I get my hands dirty with RAG applications? Part 1",
        description: "Understanding RAG from the ground up, before reaching for a framework.",
        type: "article",
        authors: ["Mohit Sharma"],
    },
};

const sections = [
    ["introduction", "Introduction"],
    ["what-is-rag", "What is RAG?"],
    ["architecture", "Architecture"],
    ["core-components", "Core components"],
    ["supporting-components", "Supporting components"],
    ["frameworks", "Why no frameworks?"],
    ["conclusion", "Conclusion"],
];

export default function RagArticlePage() {
    return (
        <div>
            <header className="blog-header">
                <Link className="blog-back" href="/blog"><ArrowLeft size={14} aria-hidden="true" /> All writing</Link>
                <p className="blog-eyebrow">RAG / Part 1</p>
                <h1 className="blog-title">How do I get my hands dirty with RAG applications?</h1>
                <p className="blog-deck">Understanding the pieces before putting them together.</p>
                <p className="blog-byline">By Mohit Sharma <span aria-hidden="true">/</span> Part 1 <span aria-hidden="true">/</span> <time dateTime="2026-10">Oct 2026</time></p>
            </header>
            <div className="blog-reading-layout">
                <aside className="blog-toc">
                    <nav aria-label="On this page">
                        <p className="blog-eyebrow">On this page</p>
                        <ol>{sections.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
                    </nav>
                </aside>
                <article className="blog-prose" aria-label="How do I get my hands dirty with RAG applications? Part 1">
                    <h2 id="introduction">Introduction</h2>
                    <p>{"Yo yo yo, I'm Mohit! This blog is about my RAG journey, how I started understanding RAG, its core components, and how I'm building my first end-to-end RAG (Retrieval-Augmented Generation) application from scratch using Python, without relying on any RAG framework."}</p>
                    <p>{"I've seen most RAG applications being built as web apps, so I decided to build something for the terminal instead."}</p>
                    <p>{"Meet Convo, a local-first terminal user interface (TUI) application that lets you select a file from your current directory and start chatting with it. But before jumping into the implementation, I wanted to understand how RAG actually works under the hood, what components we need, and why we need them. That's what this first part is about."}</p>
                    <h2 id="what-is-rag">What is RAG? Why is it needed?</h2>
                    <p>{"RAG (Retrieval-Augmented Generation) is a technique that improves an AI model's answers by retrieving relevant information from external sources and supplying that information to the model as context. Rather than depending entirely on what an LLM learned during training, RAG allows it to use information from documents, databases, previous conversations, or other knowledge sources."}</p>
                    <p>{"But why do we actually need it? Let's say you have a 100-page PDF and want to ask an LLM some questions about it. The LLM doesn't automatically know what's inside your PDF, and sending the entire document with every question isn't always practical because of context window limitations, token costs, and a lot of unnecessary information. That's where RAG comes in. Instead of sending the entire document, we can retrieve only the relevant parts of it and pass them to the LLM as context."}</p>
                    <p>{"One important thing to understand is that RAG doesn't retrain the LLM or update its knowledge permanently. We're simply giving it additional information at the time of generating an answer."}</p>
                    <p>{"A RAG system has two fundamental components:"}</p>
                    <ol><li>Retriever: Finds relevant information from an external knowledge source.</li><li>Generator: Uses the retrieved information along with the user&apos;s question to generate a response.</li></ol>
                    <h2 id="architecture">Architecture of RAG</h2>
                    <p>{"There are two main workflows in a RAG architecture."}</p>
                    <h3>1. Indexing</h3>
                    <p>{"This is where we prepare our documents so they can be searched later."}</p>
                    <p className="blog-pipeline">{"Document Loading → Parsing → Chunking → Embedding → Vector Database"}</p>
                    <ul>
                    <li>{"Document Loading: Reading documents from sources like PDFs, text files, websites, etc."}</li>
                    <li>{"Parsing: Extracting and cleaning useful text from those documents."}</li>
                    <li>{"Chunking: Splitting large documents into smaller, manageable pieces."}</li>
                    <li>{"Embedding: Converting those chunks into numerical vectors using an embedding model."}</li>
                    <li>{"Vector Database: Storing the embeddings along with their text and metadata so we can search them later."}</li>
                    </ul>
                    <h3>2. Querying</h3>
                    <p>{"This happens when the user asks a question."}</p>
                    <p className="blog-pipeline">{"User Query → Query Embedding → Retriever → Context + Prompt → LLM → Answer"}</p>
                    <p>{"When a user asks something, we convert the question into an embedding using the same compatible embedding model that we used during indexing. The retriever then searches the vector database for chunks that are semantically similar to the user's question. We take those retrieved chunks, combine them with the question and instructions, and send everything to the LLM. The LLM generates an answer using that context."}</p>
                    <h2 id="core-components">Core Components of a RAG Application</h2>
                    <div className="blog-table-wrap" role="region" aria-label="Core RAG components" tabIndex={0}>
                        <table><thead><tr><th scope="col">Component</th><th scope="col">Purpose</th></tr></thead><tbody>
                            <tr><th scope="row">{"Data Source"}</th><td>{"Supplies knowledge (PDFs, websites, documents, etc.)"}</td></tr>
                            <tr><th scope="row">{"Document Loader / Parser"}</th><td>{"Loads documents and extracts usable content"}</td></tr>
                            <tr><th scope="row">{"Text Chunker"}</th><td>{"Splits large documents into smaller chunks"}</td></tr>
                            <tr><th scope="row">{"Embedding Model"}</th><td>{"Converts text into numerical vectors"}</td></tr>
                            <tr><th scope="row">{"Vector Database / Index"}</th><td>{"Stores embeddings and enables similarity search"}</td></tr>
                            <tr><th scope="row">{"Retriever"}</th><td>{"Finds relevant document chunks for a query"}</td></tr>
                            <tr><th scope="row">{"Prompt / Context Builder"}</th><td>{"Combines retrieved context, user query, and instructions"}</td></tr>
                            <tr><th scope="row">{"Generative LLM"}</th><td>{"Generates answers using the retrieved context"}</td></tr>
                        </tbody></table>
                    </div>
                    <h3>Working</h3>
                    <figure>
                        <Image src="/blog/rag-part-1/rag-architecture.png" alt="Hand-drawn RAG architecture: documents are parsed, chunked, and embedded into a vector database. The user query is embedded to retrieve matching documents, which pass through the prompt builder to the LLM and answer. Purple arrows show indexing; blue arrows show querying." width={1018} height={780} className="h-auto w-full rounded" />
                    </figure>
                    <p>{"The important thing to notice in this workflow is that indexing and querying are two different processes. We don't need to load, parse, chunk, and embed the entire document every time a user asks a question, assuming the document has already been indexed and hasn't changed. We just embed the user's query, search for relevant chunks, and pass them to the LLM. Of course, this is just the basic RAG architecture. There are many other techniques like hybrid search, query rewriting, reranking, and so on, but we'll get into those later."}</p>
                    <h2 id="supporting-components">Some other components which are used in a RAG application but not in the core pipeline.</h2>
                    <p>{"These components are not the part of core RAG pipeline , but used for making ab Full stack user friendly RAG application."}</p>
                    <div className="blog-table-wrap" role="region" aria-label="Supporting application components" tabIndex={0}>
                        <table><thead><tr><th scope="col">Component</th><th scope="col">Purpose</th></tr></thead><tbody>
                            <tr><th scope="row">{"Session Management"}</th><td>{"Creates, tracks, resumes, and manages user conversations"}</td></tr>
                            <tr><th scope="row">{"Chat History (Temporary / Persistent)"}</th><td>{"Stores previous messages within a session, in memory or a database"}</td></tr>
                            <tr><th scope="row">{"Context Management"}</th><td>{"Selects and manages relevant conversation history, retrieved  documents, and token budgets"}</td></tr>
                            <tr><th scope="row">{"Tool Calling"}</th><td>{"Allows the LLM to interact with external tools, APIs, and  services"}</td></tr>
                            <tr><th scope="row">{"Memory"}</th><td>{"Stores and retrieves useful information across conversations"}</td></tr>
                            <tr><th scope="row">{"Caching"}</th><td>{"Reuses previously computed results to reduce latency and  computational costs"}</td></tr>
                            <tr><th scope="row">{"Document Management"}</th><td>{"Handles document uploads, indexing, updates, deletion, and  metadata"}</td></tr>
                        </tbody></table>
                    </div>
                    <p>{"For your initial RAG implementation, prioritize session management, chat history, context management, and document management. Add memory, caching, and tool calling as your application becomes more advanced."}</p>
                    <h2 id="frameworks">Why say no to frameworks (especially if you are a beginner)</h2>
                    <p>{"When I started learning RAG, I saw a lot of videos on YouTube saying \"Build your first RAG app using LangChain\", \"RAG with LangGraph\", \"Use Mastra\", \"Use Vercel AI SDK\", etc. But hardly any of these videos explain how a RAG application actually works under the hood, what components are involved, why we need them, and how to build them from scratch."}</p>
                    <p>{"I'm not saying using frameworks is bad. Frameworks are just abstractions over code that someone has already written for you. They make development faster, but if you don't understand what's happening underneath, you're just connecting a bunch of prebuilt components without knowing how they work. As a beginner, I think you should first understand how document loading, chunking, embeddings, vector databases, retrieval, and context construction actually work. Try building a simple RAG pipeline yourself using Python and the necessary libraries."}</p>
                    <p>{"Once you understand the fundamentals, frameworks will make much more sense. You'll know what they're abstracting away, when to use them, and when you don't need them. The goal shouldn't be to learn how to use a RAG framework. It should be to understand how to build a RAG system. Additionally, I personally prefer building things framework-free or with as few frameworks as possible. As I mentioned in one of my previous posts, I really love the core philosophy behind Pi and OpenCode. They're great examples of agentic software built without relying heavily on agent frameworks, which gives their engineers more control over how things work under the hood, instead of being limited by framework abstractions."}</p>
                    <h2 id="conclusion">Conclusion</h2>
                    <p>{"So that's pretty much it for Part 1. We went through what RAG actually is, why we need it, how the indexing and querying pipelines work, and the core components required to build a RAG application. One thing I've realized while learning RAG is that the basic idea isn't that complicated.The interesting part is how you build these components, connect them together, and make the whole system actually work well."}</p>
                    <p>{"In Part 2, we're getting more into the technical implementation, tech stack, and some advanced concepts of RAG."}</p>
                    <p>Check out: <a className="blog-project-link" href="https://convo.bemohit.dev" target="_blank" rel="noreferrer">convo.bemohit.dev</a></p>
                    <p>See you in Part 2!</p>
                    <div className="blog-end"><Link href="/blog">Back to all writing</Link></div>
                </article>
            </div>
        </div>
    );
}
