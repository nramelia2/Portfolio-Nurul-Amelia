export default function FeaturedProject() {
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
            "
        >
            <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-blue-200/30 blur-3xl rounded-full" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="text-center">
                    <p className="text-blue-600 font-semibold">
                        FEATURED PROJECT
                    </p>

                    <h2 className="text-5xl font-bold mt-3">
                        Telecommunication Data Analytics Platform
                    </h2>

                    <p className="mt-5 text-slate-500 max-w-3xl mx-auto leading-8">
                        A professional data engineering project focused on ETL pipelines,
                        KPI monitoring, dashboard development, reporting automation,
                        and network performance analytics.
                    </p>
                </div>

                <div
                    className="
                        mt-20
                        rounded-[40px]
                        overflow-hidden
                        bg-slate-900
                        text-white
                        shadow-2xl
                        relative
                    "
                >
                    <div className="absolute right-10 top-0 text-[160px] font-black text-white/5">
                        ZTE
                    </div>

                    <div className="grid lg:grid-cols-[1fr_0.9fr]">

                        <div className="p-12">
                            <p className="text-blue-400 font-semibold">
                                Last Project Data Engineering - Telecommunication
                            </p>

                            <h3 className="text-4xl font-bold mt-4">
                                Network KPI Monitoring & Reporting System
                            </h3>

                            <p className="mt-6 text-slate-300 leading-8">
                                Built a data analytics solution to support telecommunication
                                network monitoring by integrating operational datasets,
                                validating KPI data, automating reporting workflows,
                                and presenting insights through dashboards.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 mt-10">
                                <div className="bg-white/10 rounded-2xl p-5">
                                    ⚙️ ETL Pipeline
                                </div>

                                <div className="bg-white/10 rounded-2xl p-5">
                                    📊 KPI Dashboard
                                </div>

                                <div className="bg-white/10 rounded-2xl p-5">
                                    🔍 Data Validation
                                </div>

                                <div className="bg-white/10 rounded-2xl p-5">
                                    📈 Reporting Automation
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
                                        className="
                                            px-4
                                            py-2
                                            bg-blue-500/20
                                            text-blue-300
                                            rounded-full
                                        "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <a
                                href="https://drive.google.com/drive/folders/1kUjT_EPkASgHaRRwXZunxPMDSWfADw94?usp=sharing"
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
                                    transition
                                "
                            >
                                View Full Portfolio →
                            </a>
                        </div>

                        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-12 flex items-center">
                            <div className="space-y-6 w-full">

                                <div className="bg-white/15 rounded-3xl p-6 backdrop-blur">
                                    <p className="text-blue-100">
                                        Challenge
                                    </p>

                                    <h4 className="text-2xl font-bold mt-2">
                                        Complex Operational Data
                                    </h4>

                                    <p className="mt-3 text-blue-50 leading-7">
                                        Network performance data came from multiple sources
                                        and needed to be cleaned, validated, and transformed
                                        before it could support operational decisions.
                                    </p>
                                </div>

                                <div className="bg-white/15 rounded-3xl p-6 backdrop-blur">
                                    <p className="text-blue-100">
                                        Solution
                                    </p>

                                    <h4 className="text-2xl font-bold mt-2">
                                        Automated Data Workflow
                                    </h4>

                                    <p className="mt-3 text-blue-50 leading-7">
                                        Designed ETL workflows, optimized SQL queries,
                                        validated KPI data, and developed dashboards for
                                        monitoring and reporting.
                                    </p>
                                </div>

                                <div className="bg-white/15 rounded-3xl p-6 backdrop-blur">
                                    <p className="text-blue-100">
                                        Impact
                                    </p>

                                    <h4 className="text-2xl font-bold mt-2">
                                        Faster Insight Delivery
                                    </h4>

                                    <p className="mt-3 text-blue-50 leading-7">
                                        Improved visibility into KPI trends, reporting
                                        consistency, and network performance monitoring.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}