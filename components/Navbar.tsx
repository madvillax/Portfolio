import Link from "next/link";

export default function Navbar() {
    return (
        <header className="site-header">
            <div className="page-shell nav-row">
                <Link className="wordmark" href="/" aria-label="Mohit Sharma, home">
                    mohit.sharma
                </Link>

                <nav aria-label="Primary navigation">
                    <ul className="nav-links">
                        <li>
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li>
                            <a href="https://github.com/madvillax" target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="mailto:mohit.sharma80805@gmail.com">Email</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
