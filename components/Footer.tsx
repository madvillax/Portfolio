export default function Footer() {
    return (
        <footer className="flex min-h-[88px] items-center justify-between gap-6 px-9 py-[26px] max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-[11px] max-[760px]:px-5">
            <p className="m-0 text-[9px] text-faint">© {new Date().getFullYear()} Mohit Sharma</p>
            <nav className="flex gap-3.5" aria-label="Footer navigation">
                <a className="text-[10px] font-bold text-muted no-underline transition-colors hover:text-ink" href="https://github.com/madvillax" target="_blank" rel="noreferrer">GitHub</a>
                <a className="text-[10px] font-bold text-muted no-underline transition-colors hover:text-ink" href="https://www.linkedin.com/in/mohit-sharma-432939271" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="text-[10px] font-bold text-muted no-underline transition-colors hover:text-ink" href="mailto:mohit.sharma80805@gmail.com">Email</a>
            </nav>
        </footer>
    );
}
