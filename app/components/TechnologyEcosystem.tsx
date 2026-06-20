import {
    FaPython,
    FaDatabase,
    FaChartBar,
    FaGitAlt,
} from "react-icons/fa";

import {
    SiMysql,
    SiPostgresql,
    SiApacheairflow,
    SiGrafana,
    SiMetabase,
} from "react-icons/si";

export default function TechnologyEcosystem() {
    return (
        <section
            id="tech-stack"
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
            <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center">
                    <p className="text-blue-600 font-semibold">
                        TECHNOLOGY ECOSYSTEM
                    </p>

                    <h2 className="text-5xl font-bold mt-3">
                        Tools I Use to Build Data Solutions
                    </h2>

                    <p className="mt-5 text-slate-500 max-w-2xl mx-auto leading-8">
                        A combination of data engineering, analytics, automation,
                        and AI tools used across professional and research projects.
                    </p>
                </div>

                <div
                    className="
                        mt-20
                        rounded-[40px]
                        bg-slate-900
                        text-white
                        p-12
                        relative
                        overflow-hidden
                        shadow-2xl
                    "
                >
                    <div className="absolute right-10 top-0 text-[160px] font-black text-white/5">
                        STACK
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10 relative z-10">
                        <div>
                            <h3 className="text-2xl font-bold text-blue-400">
                                Data Engineering
                            </h3>

                            <div className="mt-8 space-y-4">
                                {[
                                    ["Python", <FaPython />],
                                    ["SQL", <FaDatabase />],
                                    ["MySQL", <SiMysql />],
                                    ["PostgreSQL", <SiPostgresql />],
                                    ["Apache Airflow", <SiApacheairflow />],
                                ].map(([name, icon]) => (
                                    <div
                                        key={name as string}
                                        className="
                                            flex
                                            items-center
                                            gap-4
                                            bg-white/10
                                            rounded-2xl
                                            p-4
                                            hover:bg-white/15
                                            hover:-translate-y-1
                                            transition-all
                                        "
                                    >
                                        <span className="text-blue-300 text-xl">
                                            {icon}
                                        </span>

                                        <span>{name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-blue-400">
                                Analytics & BI
                            </h3>

                            <div className="mt-8 space-y-4">
                                {[
                                    ["Power BI", <FaChartBar />],
                                    ["Grafana", <SiGrafana />],
                                    ["Metabase", <SiMetabase />],
                                    ["KPI Analytics", <FaChartBar />],
                                    ["Reporting Automation", <FaDatabase />],
                                ].map(([name, icon]) => (
                                    <div
                                        key={name as string}
                                        className="
                                            flex
                                            items-center
                                            gap-4
                                            bg-white/10
                                            rounded-2xl
                                            p-4
                                            hover:bg-white/15
                                            hover:-translate-y-1
                                            transition-all
                                        "
                                    >
                                        <span className="text-blue-300 text-xl">
                                            {icon}
                                        </span>

                                        <span>{name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-blue-400">
                                AI & Research
                            </h3>

                            <div className="mt-8 space-y-4">
                                {[
                                    "Machine Learning",
                                    "Deep Learning",
                                    "Computer Vision",
                                    "YOLO",
                                    "Remote Sensing",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="
                                            bg-white/10
                                            rounded-2xl
                                            p-4
                                            hover:bg-white/15
                                            hover:-translate-y-1
                                            transition-all
                                        "
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-3 relative z-10">
                        {[
                            "ETL",
                            "Data Pipeline",
                            "Data Warehouse",
                            "Data Modeling",
                            "Data Validation",
                            "Git",
                        ].map((item) => (
                            <span
                                key={item}
                                className="
                                    px-4
                                    py-2
                                    bg-blue-500/20
                                    text-blue-300
                                    rounded-full
                                "
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}