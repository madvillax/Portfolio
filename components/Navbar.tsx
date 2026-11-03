import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import SidebarNavigation from "@/components/SidebarNavigation";

export default function Navbar() {
    return (
        <header className="sticky top-0 flex max-h-dvh min-h-dvh flex-col overflow-y-auto border-r border-line max-[760px]:static max-[760px]:min-h-0 max-[760px]:max-h-none max-[760px]:overflow-visible max-[760px]:border-r-0 max-[760px]:border-b">
            <div className="flex flex-1 flex-col items-start p-7 max-[760px]:gap-5 max-[760px]:px-5 max-[760px]:pt-6 max-[760px]:pb-[18px]">
                <Link className="inline-flex min-w-0 flex-col items-start gap-3.5 no-underline max-[760px]:flex-row max-[760px]:items-center" href="/" aria-label="Mohit Sharma, home">
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

                <div className="mt-10 flex w-full flex-1 flex-col items-start border-t border-line pt-5 max-[760px]:mt-0 max-[760px]:flex-row max-[760px]:items-center max-[760px]:justify-between max-[760px]:gap-2 max-[760px]:pt-4">
                    <SidebarNavigation />
                    <div className="mt-8 max-[760px]:mt-0"><ThemeToggle /></div>
                </div>
            </div>
        </header>
    );
}
