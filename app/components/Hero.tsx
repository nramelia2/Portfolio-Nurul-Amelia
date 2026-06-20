import Image from "next/image";
import {
    FaPython,
    FaDatabase,
    FaChartBar,
    FaLinkedin,
    FaGithub,
    FaEnvelope,
} from "react-icons/fa";

import { SiApacheairflow } from "react-icons/si";

export default function Hero() {
    return (
        <section
            className="
                relative
                overflow-hidden
                min-h-screen
                pt-24
                flex
                items-center
                bg-gradient-to-br
                from-white
                via-blue-50
                to-slate-100
            "
        >
            <div className="absolute top-20 right-10 w-[520px] h-[520px] bg-blue-300/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-[420px] h-[420px] bg-indigo-300/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center relative z-10">
                <div>
                    <p className="text-blue-600 font-semibold">
                        Hello, I&apos;m
                    </p>

                    <h1 className="text-7xl lg:text-8xl font-black mt-4 leading-[0.95] tracking-tight text-slate-900">
                        Nurul <br />
                        <span className="text-blue-600">Amelia</span>
                    </h1>

                    <h2 className="mt-7 text-2xl lg:text-3xl text-slate-700 leading-relaxed">
                        <span className="font-semibold text-blue-700">
                            Data Engineer
                        </span>
                        {" / "}
                        Data Analyst
                        {" / "}
                        AI Research Enthusiast
                    </h2>

                    <p className="mt-6 text-lg text-slate-500 max-w-2xl leading-8">
                        Building reliable data pipelines, analytics dashboards,
                        and AI-powered research solutions that transform complex
                        datasets into meaningful business insights.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-8">
                        {[
                            { name: "Python", icon: <FaPython /> },
                            { name: "SQL", icon: <FaDatabase /> },
                            { name: "Airflow", icon: <SiApacheairflow /> },
                            { name: "Power BI", icon: <FaChartBar /> },
                        ].map((item) => (
                            <span
                                key={item.name}
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    px-5
                                    py-3
                                    bg-white/90
                                    backdrop-blur
                                    border
                                    border-slate-100
                                    rounded-2xl
                                    shadow-sm
                                    hover:-translate-y-1
                                    hover:shadow-xl
                                    transition-all
                                "
                            >
                                <span className="text-blue-600">
                                    {item.icon}
                                </span>
                                {item.name}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4 mt-9">
                        <a
                            href="#projects"
                            className="
                                bg-blue-600
                                text-white
                                px-7
                                py-4
                                rounded-2xl
                                hover:bg-blue-700
                                hover:-translate-y-1
                                hover:shadow-xl
                                transition-all
                                font-medium
                            "
                        >
                            View Projects →
                        </a>

                        <a
                            href="https://drive.google.com/drive/folders/1BeWGWyjwa1zBqEeKp5DQp6qtYdztBXG2?usp=sharing"
                            className="
                                bg-white
                                border
                                border-blue-200
                                text-blue-600
                                px-7
                                py-4
                                rounded-2xl
                                hover:bg-blue-50
                                hover:-translate-y-1
                                hover:shadow-xl
                                transition-all
                                font-medium
                            "
                        >
                            Download CV ↓
                        </a>
                    </div>

                    <div className="flex flex-wrap gap-8 mt-12">
                        {[
                            ["6+", "IEEE Publications"],
                            ["2+", "Years Research"],
                            ["1+", "Industry Experience"],
                        ].map(([number, label]) => (
                            <div key={label}>
                                <h3 className="text-4xl font-black text-blue-600">
                                    {number}
                                </h3>

                                <p className="text-slate-500 mt-1">
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10">
                        <p className="text-slate-500 mb-3">
                            Let&apos;s Connect
                        </p>

                        <div className="flex gap-4 text-2xl">
                            <a
                                href="https://linkedin.com/in/nramelia2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border hover:text-blue-600 hover:-translate-y-1 hover:shadow-lg transition-all"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://github.com/nramelia2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border hover:text-slate-700 hover:-translate-y-1 hover:shadow-lg transition-all"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="mailto:na.nurulamelia@gmail.com"
                                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border hover:text-blue-500 hover:-translate-y-1 hover:shadow-lg transition-all"
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-center">
                    <div className="absolute w-[540px] h-[540px] rounded-full bg-blue-200/60 blur-sm" />
                    <div className="absolute w-[450px] h-[450px] rounded-full border border-blue-300/70" />

                    <div className="absolute top-24 -left-8 bg-white/90 backdrop-blur rounded-3xl px-5 py-4 shadow-xl border border-slate-100 z-20">
                        <p className="text-sm text-slate-500">
                            Focus
                        </p>
                        <p className="font-semibold text-slate-900">
                            Data Engineering
                        </p>
                    </div>

                    <div className="absolute bottom-28 -right-4 bg-white/90 backdrop-blur rounded-3xl px-5 py-4 shadow-xl border border-slate-100 z-20">
                        <p className="text-sm text-slate-500">
                            Research
                        </p>
                        <p className="font-semibold text-slate-900">
                            Computer Vision
                        </p>
                    </div>

                    <div className="relative w-[470px] h-[620px]">
                        <Image
                            src="/projects/profile.png"
                            alt="Nurul Amelia"
                            fill
                            className="
                                object-contain
                                drop-shadow-[0_35px_45px_rgba(15,23,42,0.25)]
                            "
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}