export default function Experience() {
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
            "
        >
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-300/20 blur-3xl rounded-full" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center">
                    <p className="text-blue-600 font-semibold">
                        EXPERIENCE
                    </p>

                    <h2 className="text-5xl font-bold mt-3">
                        Professional Journey
                    </h2>

                    <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
                        From research and academic projects to real-world data engineering implementation in the telecommunications industry.
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
                                shadow-lg
                            "
                        />

                        <div
                            className="
                                rounded-[32px]
                                overflow-hidden
                                bg-gradient-to-r
                                from-blue-600
                                via-indigo-600
                                to-purple-600
                                text-white
                                shadow-2xl
                            "
                        >
                            <div className="p-12">
                                <div className="flex flex-wrap justify-between gap-4">
                                    <div>
                                        <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                                            Aug 2025 - Feb 2026
                                        </span>

                                        <h3 className="text-4xl font-bold mt-6">
                                            Data Engineer
                                        </h3>

                                        <p className="text-xl mt-2 text-blue-100">
                                            ZTE Corporation
                                        </p>
                                    </div>

                                    <div className="text-7xl opacity-20 font-black">
                                        ZTE
                                    </div>
                                </div>

                                <p className="mt-8 text-lg leading-8 text-blue-50 max-w-4xl">
                                    Developed ETL pipelines, KPI monitoring dashboards,
                                    reporting automation, data validation frameworks,
                                    and analytics solutions supporting nationwide
                                    telecommunication operations.
                                </p>

                                <div className="grid md:grid-cols-2 gap-5 mt-10">
                                    <div className="bg-white/10 rounded-2xl p-5">
                                        ⚙️ Built ETL pipelines using Python & SQL
                                    </div>

                                    <div className="bg-white/10 rounded-2xl p-5">
                                        📊 Developed KPI Monitoring Dashboard
                                    </div>

                                    <div className="bg-white/10 rounded-2xl p-5">
                                        📈 Automated Daily & Weekly Reporting
                                    </div>

                                    <div className="bg-white/10 rounded-2xl p-5">
                                        🔍 Data Validation & Quality Monitoring
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3 mt-10">
                                    {[
                                        "Python",
                                        "SQL",
                                        "MySQL",
                                        "Grafana",
                                        "Metabase",
                                        "ETL",
                                    ].map((tech) => (
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
                    <div className="w-[2px] h-24 bg-gradient-to-b from-blue-500 to-indigo-300" />
                </div>

                {/* PREVIOUS EXPERIENCES */}
                <div className="text-center">
                    <p className="text-blue-600 font-semibold">
                        PREVIOUS EXPERIENCES
                    </p>

                    <h3 className="text-4xl font-bold mt-3">
                        Supporting Journey
                    </h3>

                    <p className="text-slate-500 mt-4">
                        Experiences in automation, research, and education that shaped my technical foundation.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto mt-20">
                    <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 via-indigo-500 to-slate-200" />

                    {/* Algonova */}
                    <div className="relative pl-16 pb-16">
                        <div className="absolute left-0 w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-lg" />

                        <div className="grid lg:grid-cols-[180px_1fr] gap-8 items-start">
                            <div>
                                <p className="text-blue-600 font-semibold">
                                    Mar 2024 - Aug 2025
                                </p>
                                <p className="text-slate-400 mt-1">
                                    Part Time
                                </p>
                            </div>

                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all">
                                <h4 className="text-2xl font-bold">
                                    Information Technology Tutor
                                </h4>

                                <p className="text-slate-500 mt-1">
                                    Algonova
                                </p>

                                <p className="mt-5 text-slate-600 leading-8">
                                    Taught 200+ students in Digital Literacy,
                                    Game Design, Python, and Artificial Intelligence
                                    using adaptive and project-based learning methods.
                                </p>

                                <div className="flex flex-wrap gap-2 mt-6">
                                    {["Python", "AI", "Teaching", "STEM"].map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-2 bg-blue-50 text-blue-700 rounded-full text-sm"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Research Assistant */}
                    <div className="relative pl-16 pb-16">
                        <div className="absolute left-0 w-10 h-10 rounded-full bg-indigo-600 border-4 border-white shadow-lg" />

                        <div className="grid lg:grid-cols-[180px_1fr] gap-8 items-start">
                            <div>
                                <p className="text-indigo-600 font-semibold">
                                    Mar 2023 - Mar 2025
                                </p>
                                <p className="text-slate-400 mt-1">
                                    Research
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 border border-indigo-100 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all">
                                <h4 className="text-2xl font-bold">
                                    Research Assistant
                                </h4>

                                <p className="text-slate-500 mt-1">
                                    Center of Excellence in Artificial Intelligence
                                </p>

                                <p className="mt-5 text-slate-600 leading-8">
                                    Conducted AI and Computer Vision research,
                                    supported machine learning training programs,
                                    and contributed to scientific publications in
                                    deep learning and remote sensing.
                                </p>

                                <div className="flex flex-wrap gap-2 mt-6">
                                    {[
                                        "Computer Vision",
                                        "Machine Learning",
                                        "Deep Learning",
                                        "Research",
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-2 bg-white text-indigo-700 rounded-full text-sm"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RPA Intern */}
                    <div className="relative pl-16 pb-16">
                        <div className="absolute left-0 w-10 h-10 rounded-full bg-purple-600 border-4 border-white shadow-lg" />

                        <div className="grid lg:grid-cols-[180px_1fr] gap-8 items-start">
                            <div>
                                <p className="text-purple-600 font-semibold">
                                    Sep 2022 - Dec 2022
                                </p>
                                <p className="text-slate-400 mt-1">
                                    Internship
                                </p>
                            </div>

                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all">
                                <h4 className="text-2xl font-bold">
                                    Junior RPA Developer Intern
                                </h4>

                                <p className="text-slate-500 mt-1">
                                    PT Orbit Nasional Edukasi
                                </p>

                                <p className="mt-5 text-slate-600 leading-8">
                                    Built workflow automation solutions using UiPath
                                    and developed automation prototypes to streamline
                                    enterprise business processes.
                                </p>

                                <div className="flex flex-wrap gap-2 mt-6">
                                    {["UiPath", "RPA", "Automation", "Workflow"].map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-2 bg-purple-50 text-purple-700 rounded-full text-sm"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Teaching Assistant */}
                    <div className="relative pl-16">
                        <div className="absolute left-0 w-10 h-10 rounded-full bg-slate-800 border-4 border-white shadow-lg" />

                        <div className="grid lg:grid-cols-[180px_1fr] gap-8 items-start">
                            <div>
                                <p className="text-slate-700 font-semibold">
                                    Jul 2020 - Jun 2022
                                </p>
                                <p className="text-slate-400 mt-1">
                                    Academic
                                </p>
                            </div>

                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all">
                                <h4 className="text-2xl font-bold">
                                    Teaching Assistant
                                </h4>

                                <p className="text-slate-500 mt-1">
                                    Physics Laboratory
                                </p>

                                <p className="mt-5 text-slate-600 leading-8">
                                    Assisted Physics laboratory sessions, supported
                                    students during experiments, evaluated reports,
                                    and helped develop interactive simulations for
                                    remote learning.
                                </p>

                                <div className="flex flex-wrap gap-2 mt-6">
                                    {["Teaching", "Laboratory", "Simulation", "Physics"].map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-2 bg-slate-100 text-slate-700 rounded-full text-sm"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}