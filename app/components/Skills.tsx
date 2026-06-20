import {
    FaPython,
    FaDatabase,
    FaGitAlt,
    FaChartBar,
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
    const coreSkills = [
        {
            name: "Python",
            level: "90%",
            icon: <FaPython />,
        },
        {
            name: "SQL",
            level: "90%",
            icon: <FaDatabase />,
        },
        {
            name: "MySQL",
            level: "85%",
            icon: <SiMysql />,
        },
        {
            name: "PostgreSQL",
            level: "80%",
            icon: <SiPostgresql />,
        },
    ];

    const skillPillars = [
        {
            title: "Data Engineering",
            items: ["ETL / ELT", "Data Pipeline", "Data Warehouse", "Data Modeling"],
        },
        {
            title: "Analytics & BI",
            items: ["Power BI", "Grafana", "Metabase", "KPI Analytics"],
        },
        {
            title: "Automation",
            items: ["Apache Airflow", "Python Automation", "Reporting Workflow", "Git"],
        },
        {
            title: "AI & Research",
            items: ["Machine Learning", "Deep Learning", "Computer Vision", "Data Analytics"],
        },
    ];

    const floatingTools = [
        { name: "Apache Airflow", icon: <SiApacheairflow /> },
        { name: "Grafana", icon: <SiGrafana /> },
        { name: "Metabase", icon: <SiMetabase /> },
        { name: "Power BI", icon: <FaChartBar /> },
        { name: "Apache Spark", icon: <SiApachespark /> },
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
            "
        >
            <div className="absolute top-10 right-0 w-[520px] h-[520px] bg-blue-300/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-indigo-300/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-end">
                    <div>
                        <p className="text-blue-600 font-semibold">
                            TECH STACK
                        </p>

                        <h2 className="text-6xl font-black mt-3 leading-tight text-slate-900">
                            Data tools
                            <br />
                            ecosystem.
                        </h2>
                    </div>

                    <p className="text-slate-500 leading-8 max-w-2xl">
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
                    "
                >
                    <div className="absolute right-8 top-0 text-[170px] font-black text-white/5 select-none">
                        STACK
                    </div>

                    <div className="absolute -right-20 -bottom-20 w-[360px] h-[360px] bg-blue-500/20 rounded-full blur-3xl" />

                    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 relative z-10">
                        <div>
                            <p className="text-blue-400 font-semibold">
                                CORE CAPABILITIES
                            </p>

                            <h3 className="text-4xl font-bold mt-3">
                                Data Engineering Foundation
                            </h3>

                            <p className="mt-5 text-slate-300 leading-8">
                                Strong foundation in scripting, SQL-based data
                                processing, relational databases, ETL workflows,
                                dashboard development, and analytical problem solving.
                            </p>

                            <div className="mt-10 space-y-6">
                                {coreSkills.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center gap-3">
                                                <span className="text-blue-400 text-xl">
                                                    {skill.icon}
                                                </span>

                                                <span>{skill.name}</span>
                                            </div>

                                            <span className="text-blue-300">
                                                {skill.level}
                                            </span>
                                        </div>

                                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                                                style={{ width: skill.level }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                            {skillPillars.map((pillar) => (
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
                    <p className="text-center text-slate-400 uppercase tracking-[0.3em] text-sm">
                        Tools & Platforms
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        {floatingTools.map((item) => (
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
                                "
                            >
                                <span className="text-blue-600 text-xl">
                                    {item.icon}
                                </span>

                                <span className="font-medium text-slate-700">
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