"use client";

import { useEffect, useState } from "react";

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
                        text-2xl
                        font-black
                        tracking-tight
                        text-slate-900
                    "
                >
                    Nurul <span className="text-blue-600">Amelia</span>
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
                                        : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                                }
                            `}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <a
                    href="https://drive.google.com/drive/folders/1BeWGWyjwa1zBqEeKp5DQp6qtYdztBXG2?usp=sharing"
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
        </nav>
    );
}