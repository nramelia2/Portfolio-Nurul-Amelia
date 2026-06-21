export default function About() {
    const cards = [
        {
            icon: "🎓",
            title: "Education",
            main: "Master's Degree",
            sub: "Electrical Engineering",
        },
        {
            icon: "💼",
            title: "Experience",
            main: "Data Engineer",
            sub: "ZTE Corporation",
        },
        {
            icon: "📊",
            title: "Focus",
            main: "Data Engineering",
            sub: "Analytics & BI",
        },
        {
            icon: "🚀",
            title: "Expertise",
            main: "ETL & Data Pipeline",
            sub: "Data Platform",
        },
    ];

    const highlights = [
        "ETL & Data Engineering",
        "KPI Dashboard Analytics",
        "IEEE Research Publications",
        "Technology Mentoring",
    ];

    const interests = [
        "Computer Vision",
        "Machine Learning",
        "Remote Sensing",
        "Data Warehouse",
        "Analytics Engineering",
        "Data Platform",
    ];

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
                dark:from-slate-950
                dark:via-slate-900
                dark:to-slate-950
            "
        >
            <div className="absolute top-20 left-0 w-[420px] h-[420px] bg-blue-200/30 dark:bg-blue-600/10 blur-3xl rounded-full" />
            <div className="absolute bottom-10 right-0 w-[420px] h-[420px] bg-indigo-200/30 dark:bg-indigo-600/10 blur-3xl rounded-full" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
                    <div>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">
                            ABOUT ME
                        </p>

                        <h2
                            className="
                                text-6xl
                                font-black
                                mt-4
                                leading-tight
                                text-slate-900
                                dark:text-white
                            "
                        >
                            Data-driven
                            <br />
                            problem solver.
                        </h2>

                        <p className="mt-8 text-lg text-slate-600 dark:text-slate-300 leading-8">
                            Master&apos;s graduate in Electrical Engineering with
                            hands-on experience in Data Engineering, Data Analytics,
                            and Enterprise Data Management. I build ETL pipelines,
                            KPI monitoring dashboards, reporting automation, and
                            data solutions that turn complex operational datasets
                            into actionable insights.
                        </p>

                        <div
                            className="
                                mt-10
                                inline-flex
                                items-center
                                gap-3
                                rounded-full
                                bg-white/80
                                border
                                border-slate-100
                                px-5
                                py-3
                                shadow-sm
                                dark:bg-slate-900/80
                                dark:border-slate-700
                            "
                        >
                            <span className="w-3 h-3 rounded-full bg-blue-600 animate-pulse" />
                            <span className="text-slate-600 dark:text-slate-300 font-medium">
                                Data Engineer • AI Research Enthusiast
                            </span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                        {cards.map((card) => (
                            <div
                                key={card.title}
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
                                    dark:bg-slate-900/80
                                    dark:border-slate-700
                                    dark:hover:border-blue-500/40
                                "
                            >
                                <div className="text-4xl group-hover:scale-110 transition">
                                    {card.icon}
                                </div>

                                <h3 className="font-bold mt-5 text-slate-900 dark:text-white">
                                    {card.title}
                                </h3>

                                <p className="mt-2 text-slate-600 dark:text-slate-300">
                                    {card.main}
                                </p>

                                <p className="text-slate-500 dark:text-slate-400">
                                    {card.sub}
                                </p>
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
                        dark:bg-gradient-to-br
                        dark:from-slate-900
                        dark:via-blue-950
                        dark:to-slate-950
                        dark:border
                        dark:border-slate-800
                    "
                >
                    <div className="absolute right-10 top-0 text-[150px] font-black text-white/5">
                        DATA
                    </div>

                    <div className="absolute -right-20 -bottom-20 w-[360px] h-[360px] bg-blue-500/20 blur-3xl rounded-full" />

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
                                {highlights.map((item) => (
                                    <p key={item} className="flex gap-3">
                                        <span className="text-blue-400">✦</span>
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-blue-400 font-bold mb-5">
                                Research & Exploring
                            </h4>

                            <div className="flex flex-wrap gap-3">
                                {interests.map((item) => (
                                    <span
                                        key={item}
                                        className="
                                            px-4
                                            py-2
                                            bg-white/10
                                            border
                                            border-white/10
                                            rounded-full
                                            text-sm
                                            text-slate-100
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