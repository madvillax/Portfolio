export default function Footer() {
    return (
        <footer className="site-footer">
            <p>© {new Date().getFullYear()} Mohit Sharma</p>
            <nav aria-label="Footer navigation">
                <a href="https://github.com/madvillax" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/mohit-sharma-432939271" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="mailto:mohit.sharma80805@gmail.com">Email</a>
            </nav>
        </footer>
    );
}
