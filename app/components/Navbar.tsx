"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");

    const navItems = [
        { name: "About", href: "about" },
        { name: "Experience", href: "experience" },
        { name: "Projects", href: "projects" },
        { name: "Skills", href: "skills" },
        { name: "Publications", href: "publications" },
        { name: "Contact", href: "contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) =>
                document.getElementById(item.href)
            );

            const current = sections.find((section) => {
                if (!section) return false;

                const rect = section.getBoundingClientRect();
                return rect.top <= 180 && rect.bottom >= 180;
            });

            if (current) {
                setActiveSection(current.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className="
                fixed
                top-0
                left-0
                right-0
                z-50
                bg-white/75
                backdrop-blur-xl
                border-b
                border-slate-200/70
                dark:bg-slate-950/75
                dark:border-slate-800/80
            "
        >
            <div
                className="
                    max-w-7xl
                    mx-auto
                    px-6
                    py-4
                    flex
                    items-center
                    justify-between
                "
            >
                <a
                    href="#"
                    className="
                        flex
                        items-center
                        gap-3
                    "
                >
                    <div
                        className="
                            w-11
                            h-11
                            rounded-2xl
                            bg-gradient-to-br
                            from-blue-500
                            to-blue-700
                            text-white
                            flex
                            items-center
                            justify-center
                            font-black
                            text-sm
                            tracking-tight
                            shadow-md
                        "
                    >
                        NA
                    </div>

                    <span
                        className="
                            text-2xl
                            font-black
                            tracking-tight
                            text-slate-900
                            dark:text-white
                        "
                    >
                        Nurul <span className="text-blue-600">Amelia</span>
                    </span>
                </a>

                <div
                    className="
                        hidden
                        lg:flex
                        items-center
                        gap-2
                        bg-white
                        border
                        border-slate-100
                        rounded-full
                        p-2
                        shadow-sm
                        dark:bg-slate-900
                        dark:border-slate-700
                    "
                >
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={`#${item.href}`}
                            className={`
                                px-4
                                py-2
                                rounded-full
                                text-sm
                                font-medium
                                transition-all
                                ${
                                    activeSection === item.href
                                        ? "bg-blue-600 text-white shadow-md"
                                        : "text-slate-600 hover:text-blue-600 hover:bg-blue-50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800"
                                }
                            `}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <ThemeToggle />

                    <a
                        href="/Nurul Amelia-CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            hidden
                            md:inline-block
                            bg-blue-600
                            text-white
                            px-5
                            py-2.5
                            rounded-full
                            text-sm
                            font-semibold
                            hover:bg-blue-700
                            hover:-translate-y-0.5
                            transition-all
                        "
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </nav>
    );
}