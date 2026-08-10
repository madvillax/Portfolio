import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Navbar() {
    return (
        <header className="site-header">
            <div className="identity-row">
                <Link className="identity" href="/" aria-label="Mohit Sharma, home">
                    <Image
                        className="identity-image"
                        src="/profile.jpg"
                        alt=""
                        width={54}
                        height={54}
                        priority
                    />
                    <span className="identity-copy">
                        <strong>Mohit Sharma</strong>
                        <span>AI Full-stack Developer</span>
                    </span>
                </Link>

                <div className="header-controls">
                    <nav aria-label="Primary navigation">
                        <ul className="nav-links">
                            <li><Link href="/#work">Work</Link></li>
                            <li><Link href="/#experience">Experience</Link></li>
                            <li><Link href="/projects">Projects</Link></li>
                            <li><Link href="/#contact">Contact</Link></li>
                        </ul>
                    </nav>
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    );
}
