import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="border-b border-line">
            <div className="flex items-center justify-between gap-7 p-9 max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-5 max-[760px]:px-5 max-[760px]:pt-6 max-[760px]:pb-[18px]">
                <Link className="inline-flex min-w-0 items-center gap-3.5 no-underline" href="/" aria-label="Mohit Sharma, home">
                    <Image
                        className="size-[54px] shrink-0 rounded-[2px] border border-strong-line bg-surface-soft object-cover saturate-110 contrast-105"
                        src="/profile.jpg"
                        alt=""
                        width={54}
                        height={54}
                        priority
                    />
                    <span className="grid leading-[1.25]">
                        <strong className="font-sans text-2xl font-semibold tracking-[-0.04em]">Mohit Sharma</strong>
                        <span className="mt-1 text-[11px] tracking-[0.02em] text-muted">AI Full-stack Developer</span>
                    </span>
                </Link>

                <div className="flex items-center border-line max-[760px]:justify-between max-[760px]:border-t max-[760px]:pt-4">
                    <nav aria-label="Primary navigation">
                        <ul className="m-0 flex list-none items-center gap-3.5 p-0 max-[390px]:gap-2.5">
                            <li><Link className="text-[11px] font-semibold text-muted no-underline transition-colors hover:text-ink" href="/#work">Work</Link></li>
                            <li><Link className="text-[11px] font-semibold text-muted no-underline transition-colors hover:text-ink" href="/#experience">Experience</Link></li>
                            <li><Link className="text-[11px] font-semibold text-muted no-underline transition-colors hover:text-ink" href="/projects">Projects</Link></li>
                            <li><Link className="text-[11px] font-semibold text-muted no-underline transition-colors hover:text-ink" href="/#contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
