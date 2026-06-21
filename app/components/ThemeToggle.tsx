"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
            document.documentElement.classList.add("dark");
            setDark(true);
        } else {
            document.documentElement.classList.remove("dark");
            setDark(false);
        }
    }, []);

    const toggleTheme = () => {
        const next = !dark;
        setDark(next);

        if (next) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="
                w-11 h-11
                rounded-full
                flex items-center justify-center
                bg-white
                text-slate-700
                border border-slate-200
                shadow-sm
                hover:shadow-md
                transition-all

                dark:bg-slate-800
                dark:text-yellow-300
                dark:border-slate-700
            "
            aria-label="Toggle theme"
        >
            {dark ? <FaSun /> : <FaMoon />}
        </button>
    );
}