export default function Experience() {
    const zteHighlights = [
        "⚙️ Built ETL pipelines using Python & SQL",
        "📊 Developed KPI Monitoring Dashboard",
        "📈 Automated Daily & Weekly Reporting",
        "🔍 Data Validation & Quality Monitoring",
    ];

    const zteTech = ["Python", "SQL", "MySQL", "Grafana", "Metabase", "ETL"];

    const experiences = [
        {
            period: "Mar 2024 - Aug 2025",
            type: "Part Time",
            title: "Information Technology Tutor",
            company: "Algonova",
            desc: "Taught 200+ students in Digital Literacy, Game Design, Python, and Artificial Intelligence using adaptive and project-based learning methods.",
            color: "blue",
            tags: ["Python", "AI", "Teaching", "STEM"],
        },
        {
            period: "Mar 2023 - Mar 2025",
            type: "Research",
            title: "Research Assistant",
            company: "Center of Excellence in Artificial Intelligence",
            desc: "Conducted AI and Computer Vision research, supported machine learning training programs, and contributed to scientific publications in deep learning and remote sensing.",
            color: "indigo",
            tags: ["Computer Vision", "Machine Learning", "Deep Learning", "Research"],
        },
        {
            period: "Sep 2022 - Dec 2022",
            type: "Internship",
            title: "Junior RPA Developer Intern",
            company: "PT Orbit Nasional Edukasi",
            desc: "Built workflow automation solutions using UiPath and developed automation prototypes to streamline enterprise business processes.",
            color: "purple",
            tags: ["UiPath", "RPA", "Automation", "Workflow"],
        },
        {
            period: "Jul 2020 - Jun 2022",
            type: "Academic",
            title: "Teaching Assistant",
            company: "Physics Laboratory",
            desc: "Assisted Physics laboratory sessions, supported students during experiments, evaluated reports, and helped develop interactive simulations for remote learning.",
            color: "slate",
            tags: ["Teaching", "Laboratory", "Simulation", "Physics"],
        },
    ];

    const colorMap: Record<string, string> = {
        blue: "bg-blue-600 text-blue-600 bg-blue-50 text-blue-700",
        indigo: "bg-indigo-600 text-indigo-600 bg-indigo-50 text-indigo-700",
        purple: "bg-purple-600 text-purple-600 bg-purple-50 text-purple-700",
        slate: "bg-slate-800 text-slate-700 bg-slate-100 text-slate-700",
    };

    return (
        <section
            id="experience"
            className="
                py-32
                relative
                overflow-hidden
                bg-gradient-to-b
                from-white
                via-blue-50/40
                to-white
                dark:from-slate-950
                dark:via-slate-900
                dark:to-slate-950
            "
        >
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-300/20 dark:bg-blue-600/10 blur-3xl rounded-full" />
            <div className="absolute bottom-20 left-0 w-[420px] h-[420px] bg-indigo-300/20 dark:bg-indigo-600/10 blur-3xl rounded-full" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center">
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        EXPERIENCE
                    </p>

                    <h2 className="text-5xl font-black mt-3 text-slate-900 dark:text-white">
                        Professional Journey
                    </h2>

                    <p className="mt-4 text-slate-500 dark:text-slate-300 max-w-2xl mx-auto leading-8">
                        From research and academic projects to real-world data
                        engineering implementation in the telecommunications industry.
                    </p>
                </div>

                {/* ZTE PREMIUM CARD */}
                <div className="mt-20 relative">
                    <div
                        className="
                            absolute
                            left-8
                            top-0
                            bottom-0
                            w-1
                            bg-gradient-to-b
                            from-blue-600
                            to-indigo-600
                            rounded-full
                        "
                    />

                    <div className="relative pl-24">
                        <div
                            className="
                                absolute
                                left-[18px]
                                top-12
                                w-6
                                h-6
                                bg-blue-600
                                rounded-full
                                border-4
                                border-white
                                dark:border-slate-950
                                shadow-lg
                            "
                        />

                        <div
                            className="
                                rounded-[36px]
                                overflow-hidden
                                bg-gradient-to-r
                                from-blue-600
                                via-indigo-600
                                to-purple-600
                                text-white
                                shadow-2xl
                                relative
                            "
                        >
                            <div className="absolute right-10 top-0 text-[170px] font-black text-white/10 select-none">
                                ZTE
                            </div>

                            <div className="p-12 relative z-10">
                                <div className="flex flex-wrap justify-between gap-4">
                                    <div>
                                        <span className="bg-white/20 px-4 py-2 rounded-full text-sm backdrop-blur">
                                            Aug 2025 - Feb 2026
                                        </span>

                                        <h3 className="text-4xl font-bold mt-6">
                                            Data Analyst
                                        </h3>

                                        <p className="text-xl mt-2 text-blue-100">
                                            ZTE Corporation
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-8 text-lg leading-8 text-blue-50 max-w-4xl">
                                    Developed ETL pipelines, KPI monitoring dashboards,
                                    reporting automation, data validation frameworks,
                                    and analytics solutions supporting nationwide
                                    telecommunication operations.
                                </p>

                                <div className="grid md:grid-cols-2 gap-5 mt-10">
                                    {zteHighlights.map((item) => (
                                        <div
                                            key={item}
                                            className="
                                                bg-white/10
                                                rounded-2xl
                                                p-5
                                                backdrop-blur
                                                border
                                                border-white/10
                                                hover:bg-white/15
                                                hover:-translate-y-1
                                                transition-all
                                            "
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-3 mt-10">
                                    {zteTech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-4 py-2 rounded-full bg-white/20 backdrop-blur"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CONNECTOR */}
                <div className="flex justify-center my-16">
                    <div className="w-[2px] h-24 bg-gradient-to-b from-blue-500 to-indigo-300 dark:to-slate-700" />
                </div>

                {/* PREVIOUS EXPERIENCES */}
                <div className="text-center">
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        PREVIOUS EXPERIENCES
                    </p>

                    <h3 className="text-4xl font-black mt-3 text-slate-900 dark:text-white">
                        Supporting Journey
                    </h3>

                    <p className="text-slate-500 dark:text-slate-300 mt-4">
                        Experiences in automation, research, and education that shaped my technical foundation.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto mt-20">
                    <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 via-indigo-500 to-slate-200 dark:to-slate-700" />

                    {experiences.map((exp) => (
                        <div key={exp.title} className="relative pl-16 pb-16 last:pb-0">
                            <div
                                className={`
                                    absolute
                                    left-0
                                    w-10
                                    h-10
                                    rounded-full
                                    border-4
                                    border-white
                                    dark:border-slate-950
                                    shadow-lg
                                    ${exp.color === "blue" ? "bg-blue-600" : ""}
                                    ${exp.color === "indigo" ? "bg-indigo-600" : ""}
                                    ${exp.color === "purple" ? "bg-purple-600" : ""}
                                    ${exp.color === "slate" ? "bg-slate-800" : ""}
                                `}
                            />

                            <div className="grid lg:grid-cols-[180px_1fr] gap-8 items-start">
                                <div>
                                    <p
                                        className={`
                                            font-semibold
                                            ${exp.color === "blue" ? "text-blue-600 dark:text-blue-400" : ""}
                                            ${exp.color === "indigo" ? "text-indigo-600 dark:text-indigo-400" : ""}
                                            ${exp.color === "purple" ? "text-purple-600 dark:text-purple-400" : ""}
                                            ${exp.color === "slate" ? "text-slate-700 dark:text-slate-300" : ""}
                                        `}
                                    >
                                        {exp.period}
                                    </p>

                                    <p className="text-slate-400 dark:text-slate-500 mt-1">
                                        {exp.type}
                                    </p>
                                </div>

                                <div
                                    className="
                                        bg-white
                                        rounded-3xl
                                        p-8
                                        border
                                        border-slate-100
                                        shadow-sm
                                        hover:-translate-y-2
                                        hover:shadow-2xl
                                        transition-all
                                        duration-300
                                        dark:bg-slate-900/80
                                        dark:border-slate-700
                                        dark:hover:border-blue-500/40
                                    "
                                >
                                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                                        {exp.title}
                                    </h4>

                                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                                        {exp.company}
                                    </p>

                                    <p className="mt-5 text-slate-600 dark:text-slate-300 leading-8">
                                        {exp.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-6">
                                        {exp.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="
                                                    px-3
                                                    py-2
                                                    bg-blue-50
                                                    text-blue-700
                                                    rounded-full
                                                    text-sm
                                                    dark:bg-blue-500/10
                                                    dark:text-blue-300
                                                "
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}