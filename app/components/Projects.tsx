export default function FeaturedProject() {
    const features = [
        "⚙️ ETL Pipeline",
        "📊 KPI Dashboard",
        "🔍 Data Validation",
        "📈 Reporting Automation",
    ];

    const techStack = ["Python", "SQL", "MySQL", "Grafana", "Metabase", "ETL"];

    const caseStudy = [
        {
            label: "Challenge",
            title: "Complex Operational Data",
            desc: "Network performance data came from multiple sources and needed to be cleaned, validated, and transformed before it could support operational decisions.",
        },
        {
            label: "Solution",
            title: "Automated Data Workflow",
            desc: "Designed ETL workflows, optimized SQL queries, validated KPI data, and developed dashboards for monitoring and reporting.",
        },
        {
            label: "Impact",
            title: "Faster Insight Delivery",
            desc: "Improved visibility into KPI trends, reporting consistency, and network performance monitoring.",
        },
    ];

    return (
        <section
            id="projects"
            className="
                py-32
                relative
                overflow-hidden
                bg-gradient-to-b
                from-white
                via-slate-50
                to-blue-50/50
                dark:from-slate-950
                dark:via-slate-900
                dark:to-slate-950
            "
        >
            <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-blue-200/30 dark:bg-blue-600/10 blur-3xl rounded-full" />
            <div className="absolute bottom-20 right-0 w-[420px] h-[420px] bg-indigo-200/30 dark:bg-indigo-600/10 blur-3xl rounded-full" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center">
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        FEATURED PROJECT
                    </p>

                    <h2 className="text-5xl font-black mt-3 text-slate-900 dark:text-white">
                        Telecommunication Data Analytics Platform
                    </h2>

                    <p className="mt-5 text-slate-500 dark:text-slate-300 max-w-3xl mx-auto leading-8">
                        A professional data engineering project focused on ETL pipelines,
                        KPI monitoring, dashboard development, reporting automation,
                        and network performance analytics.
                    </p>
                </div>

                <div
                    className="
                        mt-20
                        rounded-[44px]
                        overflow-hidden
                        bg-slate-900
                        text-white
                        shadow-2xl
                        relative
                        border
                        border-white/10
                        dark:bg-gradient-to-br
                        dark:from-slate-900
                        dark:via-blue-950
                        dark:to-slate-950
                        dark:border-slate-800
                    "
                >
                    <div className="absolute right-10 top-0 text-[170px] font-black text-white/5 select-none">
                        ZTE
                    </div>

                    <div className="absolute -left-20 -bottom-20 w-[360px] h-[360px] bg-blue-500/20 rounded-full blur-3xl" />

                    <div className="grid lg:grid-cols-[1fr_0.9fr] relative z-10">
                        <div className="p-12">
                            <p className="text-blue-400 font-semibold">
                                Last Project Data Engineering - Telecommunication
                            </p>

                            <h3 className="text-4xl font-bold mt-4 leading-tight">
                                Network KPI Monitoring & Reporting System
                            </h3>

                            <p className="mt-6 text-slate-300 leading-8">
                                Built a data analytics solution to support telecommunication
                                network monitoring by integrating operational datasets,
                                validating KPI data, automating reporting workflows,
                                and presenting insights through dashboards.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 mt-10">
                                {features.map((item) => (
                                    <div
                                        key={item}
                                        className="
                                            bg-white/10
                                            rounded-2xl
                                            p-5
                                            border
                                            border-white/10
                                            backdrop-blur
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
                                {techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="
                                            px-4
                                            py-2
                                            bg-blue-500/20
                                            text-blue-300
                                            rounded-full
                                            border
                                            border-blue-400/10
                                        "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <a
                                href="/Documentation_ToolsMonitoring.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    inline-block
                                    mt-10
                                    bg-white
                                    text-blue-600
                                    px-6
                                    py-3
                                    rounded-xl
                                    font-semibold
                                    hover:bg-blue-50
                                    hover:-translate-y-1
                                    hover:shadow-xl
                                    transition-all
                                "
                            >
                                View Full Portfolio →
                            </a>
                        </div>

                        <div
                            className="
                                bg-gradient-to-br
                                from-blue-600
                                to-indigo-700
                                p-12
                                flex
                                items-center
                                dark:from-blue-950
                                dark:to-indigo-950
                            "
                        >
                            <div className="space-y-6 w-full">
                                {caseStudy.map((item) => (
                                    <div
                                        key={item.label}
                                        className="
                                            bg-white/15
                                            rounded-3xl
                                            p-6
                                            backdrop-blur
                                            border
                                            border-white/10
                                            hover:bg-white/20
                                            hover:-translate-y-1
                                            transition-all
                                        "
                                    >
                                        <p className="text-blue-100">
                                            {item.label}
                                        </p>

                                        <h4 className="text-2xl font-bold mt-2">
                                            {item.title}
                                        </h4>

                                        <p className="mt-3 text-blue-50 leading-7">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}