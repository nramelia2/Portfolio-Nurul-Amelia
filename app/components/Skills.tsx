import {
    FaPython,
    FaDatabase,
    FaGitAlt,
    FaChartBar,
    FaRobot,
    FaProjectDiagram,
} from "react-icons/fa";

import {
    SiMysql,
    SiPostgresql,
    SiApacheairflow,
    SiGrafana,
    SiMetabase,
    SiApachespark,
} from "react-icons/si";

export default function Skills() {
    const capabilities = [
        {
            name: "SQL & Data Processing",
            level: "75%",
            desc: "Querying, transformation, validation, and analytical data preparation.",
            icon: <FaDatabase />,
        },
        {
            name: "ETL & Data Pipeline",
            level: "75%",
            desc: "Building reliable workflows for data integration and reporting.",
            icon: <FaProjectDiagram />,
        },
        {
            name: "Dashboard & Analytics",
            level: "80%",
            desc: "KPI monitoring, reporting automation, and business insight delivery.",
            icon: <FaChartBar />,
        },
        {
            name: "AI & Computer Vision",
            level: "85%",
            desc: "Machine learning, deep learning, YOLO-based research, and experimentation.",
            icon: <FaRobot />,
        },
        {
            name: "Workflow Automation",
            level: "75%",
            desc: "Python automation, reporting workflow, orchestration, and process improvement.",
            icon: <SiApacheairflow />,
        },
    ];

    const ecosystems = [
        {
            title: "Data Engineering",
            items: ["ETL / ELT", "Data Pipeline", "Data Warehouse", "Data Modeling"],
        },
        {
            title: "Analytics & BI",
            items: ["Power BI", "Grafana", "Metabase", "KPI Analytics"],
        },
        {
            title: "Database",
            items: ["MySQL", "PostgreSQL", "SQL Server", "Data Validation"],
        },
        {
            title: "AI & Research",
            items: ["Machine Learning", "Deep Learning", "Computer Vision", "YOLO"],
        },
    ];

    const tools = [
        { name: "Python", icon: <FaPython /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Airflow", icon: <SiApacheairflow /> },
        { name: "Spark", icon: <SiApachespark /> },
        { name: "Grafana", icon: <SiGrafana /> },
        { name: "Metabase", icon: <SiMetabase /> },
        { name: "Power BI", icon: <FaChartBar /> },
        { name: "Git", icon: <FaGitAlt /> },
    ];

    return (
        <section
            id="skills"
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
            <div className="absolute top-10 right-0 w-[520px] h-[520px] bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-end">
                    <div>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-[0.2em]">
                            TECH STACK
                        </p>

                        <h2 className="text-6xl font-black mt-3 leading-tight text-slate-900 dark:text-white">
                            Data tools
                            <br />
                            ecosystem.
                        </h2>
                    </div>

                    <p className="text-slate-500 dark:text-slate-300 leading-8 max-w-2xl">
                        A practical ecosystem of tools used to build data pipelines,
                        analytics dashboards, reporting automation, and AI research
                        workflows.
                    </p>
                </div>

                <div
                    className="
                        mt-16
                        rounded-[44px]
                        bg-slate-950
                        text-white
                        p-10
                        lg:p-12
                        relative
                        overflow-hidden
                        shadow-2xl
                        border
                        border-white/10
                        dark:bg-gradient-to-br
                        dark:from-slate-900
                        dark:via-blue-950
                        dark:to-slate-950
                        dark:border-slate-800
                    "
                >
                    <div className="absolute right-8 top-0 text-[170px] font-black text-white/5 select-none">
                        STACK
                    </div>

                    <div className="absolute -right-20 -bottom-20 w-[360px] h-[360px] bg-blue-500/20 rounded-full blur-3xl" />

                    <div className="grid lg:grid-cols-[1fr_1fr] gap-14 relative z-10">
                        <div>
                            <p className="text-blue-400 font-semibold">
                                CORE CAPABILITIES
                            </p>

                            <h3 className="text-4xl font-bold mt-3">
                                Capability Map
                            </h3>

                            <p className="mt-5 text-slate-300 leading-8">
                                Rather than listing tools only, this section maps
                                capabilities across data engineering, analytics,
                                automation, and AI research.
                            </p>

                            <div className="mt-10 space-y-6">
                                {capabilities.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between gap-5 items-start mb-3">
                                            <div className="flex gap-3">
                                                <span className="mt-1 text-blue-400 text-xl">
                                                    {skill.icon}
                                                </span>

                                                <div>
                                                    <p className="font-semibold">
                                                        {skill.name}
                                                    </p>

                                                    <p className="text-sm text-slate-400 mt-1 leading-6">
                                                        {skill.desc}
                                                    </p>
                                                </div>
                                            </div>

                                            <span className="text-blue-300 font-bold">
                                                {skill.level}
                                            </span>
                                        </div>

                                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                            <div
                                                className="
                                                    h-full
                                                    bg-gradient-to-r
                                                    from-blue-500
                                                    to-cyan-400
                                                    rounded-full
                                                    transition-all
                                                    duration-700
                                                "
                                                style={{ width: skill.level }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                            {ecosystems.map((pillar) => (
                                <div
                                    key={pillar.title}
                                    className="
                                        group
                                        bg-white/10
                                        rounded-3xl
                                        p-6
                                        border
                                        border-white/10
                                        backdrop-blur
                                        hover:-translate-y-2
                                        hover:bg-white/15
                                        transition-all
                                        duration-300
                                    "
                                >
                                    <h4 className="text-xl font-bold text-blue-300">
                                        {pillar.title}
                                    </h4>

                                    <div className="flex flex-wrap gap-2 mt-5">
                                        {pillar.items.map((item) => (
                                            <span
                                                key={item}
                                                className="
                                                    px-3
                                                    py-2
                                                    bg-slate-900
                                                    border
                                                    border-white/10
                                                    text-slate-200
                                                    rounded-full
                                                    text-sm
                                                "
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-14">
                    <p className="text-center text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] text-sm">
                        Tools & Platforms
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        {tools.map((item) => (
                            <div
                                key={item.name}
                                className="
                                    flex
                                    items-center
                                    gap-3
                                    px-5
                                    py-3
                                    bg-white
                                    border
                                    border-slate-100
                                    rounded-2xl
                                    shadow-sm
                                    hover:-translate-y-2
                                    hover:shadow-xl
                                    transition-all
                                    dark:bg-slate-900
                                    dark:border-slate-700
                                    dark:text-slate-200
                                    dark:hover:border-blue-500/40
                                "
                            >
                                <span className="text-blue-600 dark:text-blue-400 text-xl">
                                    {item.icon}
                                </span>

                                <span className="font-medium text-slate-700 dark:text-slate-200">
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}