import Link from "next/link";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="page-shell footer-row">
                <p>Mohit Sharma</p>
                <nav aria-label="Footer navigation">
                    <Link href="/projects">Projects</Link>
                    <a href="https://www.linkedin.com/in/mohit-sharma-432939271" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                    <a href="mailto:mohit.sharma80805@gmail.com">Email</a>
                </nav>
            </div>
        </footer>
    );
}
