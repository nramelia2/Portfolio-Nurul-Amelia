export default function About() {
    return (
        <section
            id="about"
            className="
                py-32
                relative
                overflow-hidden
                bg-gradient-to-b
                from-white
                via-blue-50/30
                to-white
            "
        >
            <div className="absolute top-20 left-0 w-[420px] h-[420px] bg-blue-200/30 blur-3xl rounded-full" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
                    <div>
                        <p className="text-blue-600 font-semibold">
                            ABOUT ME
                        </p>

                        <h2 className="text-6xl font-black mt-4 leading-tight text-slate-900">
                            Data-driven
                            <br />
                            problem solver.
                        </h2>

                        <p className="mt-8 text-lg text-slate-600 leading-8">
                            Master&apos;s graduate in Electrical Engineering with
                            hands-on experience in Data Engineering, Data Analytics,
                            and Enterprise Data Management. I build ETL pipelines,
                            KPI monitoring dashboards, reporting automation, and
                            data solutions that turn complex operational datasets
                            into actionable insights.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                        {[
                            ["🎓", "Education", "Master&apos;s Degree", "Electrical Engineering"],
                            ["💼", "Experience", "Data Engineer", "ZTE Corporation"],
                            ["📊", "Focus", "Data Engineering", "Analytics & BI"],
                            ["🚀", "Expertise", "ETL & Data Pipeline", "Data Platform"],
                        ].map(([icon, title, main, sub]) => (
                            <div
                                key={title}
                                className="
                                    group
                                    bg-white/80
                                    backdrop-blur
                                    rounded-[28px]
                                    p-7
                                    border
                                    border-slate-100
                                    shadow-sm
                                    hover:-translate-y-2
                                    hover:shadow-2xl
                                    transition-all
                                    duration-300
                                "
                            >
                                <div className="text-4xl group-hover:scale-110 transition">
                                    {icon}
                                </div>

                                <h3 className="font-bold mt-5 text-slate-900">
                                    {title}
                                </h3>

                                <p
                                    className="mt-2 text-slate-600"
                                    dangerouslySetInnerHTML={{ __html: main }}
                                />

                                <p
                                    className="text-slate-500"
                                    dangerouslySetInnerHTML={{ __html: sub }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    className="
                        mt-20
                        rounded-[40px]
                        bg-slate-900
                        text-white
                        p-10
                        relative
                        overflow-hidden
                        shadow-2xl
                    "
                >
                    <div className="absolute right-10 top-0 text-[150px] font-black text-white/5">
                        DATA
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12 relative z-10">
                        <div>
                            <h3 className="text-3xl font-bold">
                                Career Overview
                            </h3>

                            <p className="mt-4 text-slate-300 leading-8">
                                A blend of industry data engineering, academic
                                research, and technology education.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-blue-400 font-bold mb-5">
                                Career Highlights
                            </h4>

                            <div className="space-y-4 text-slate-200">
                                <p>⚙️ ETL & Data Engineering</p>
                                <p>📊 KPI Dashboard Analytics</p>
                                <p>📚 IEEE Research Publications</p>
                                <p>👩‍🏫 Technology Mentoring</p>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-blue-400 font-bold mb-5">
                                Research & Exploring
                            </h4>

                            <div className="flex flex-wrap gap-3">
                                {[
                                    "Computer Vision",
                                    "Machine Learning",
                                    "Remote Sensing",
                                    "Data Warehouse",
                                    "Analytics Engineering",
                                    "Data Platform",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="
                                            px-4
                                            py-2
                                            bg-white/10
                                            rounded-full
                                            text-sm
                                        "
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}