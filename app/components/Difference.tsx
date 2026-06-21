export default function Difference() {
    const points = [
        {
            number: "01",
            label: "Engineering",
            title: "Engineering Background",
            desc: "Strong foundation in Electrical and Computer Engineering with structured analytical thinking for solving technical and data-driven problems.",
        },
        {
            number: "02",
            label: "Industry",
            title: "Industry Data Experience",
            desc: "Hands-on experience building ETL pipelines, KPI dashboards, reporting automation, and data validation workflows in telecommunication operations.",
        },
        {
            number: "03",
            label: "Research",
            title: "AI Research Foundation",
            desc: "Published research in Computer Vision, Deep Learning, Object Detection, and Remote Sensing with 6 IEEE publications.",
        },
    ];

    return (
        <section
            id="difference"
            className="
                py-32
                relative
                overflow-hidden
                bg-gradient-to-b
                from-white
                via-slate-50
                to-white
                dark:from-slate-950
                dark:via-slate-900
                dark:to-slate-950
            "
        >
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
                    <div className="lg:sticky lg:top-32">
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">
                            WHY ME
                        </p>

                        <h2 className="text-5xl lg:text-6xl font-black mt-3 text-slate-900 dark:text-white leading-tight">
                            What Makes
                            <br />
                            Me Different
                        </h2>

                        <p className="mt-6 text-slate-500 dark:text-slate-300 leading-8">
                            A unique combination of engineering background,
                            real-world data experience, and AI research capability.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {points.map((item) => (
                            <div
                                key={item.number}
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-[34px]
                                    bg-white/80
                                    backdrop-blur
                                    border
                                    border-slate-100
                                    p-8
                                    shadow-sm
                                    hover:-translate-y-2
                                    hover:shadow-2xl
                                    transition-all
                                    duration-500
                                    dark:bg-slate-900/80
                                    dark:border-slate-700
                                    dark:hover:border-blue-500/40
                                "
                            >
                                <div className="absolute right-6 top-0 text-[110px] font-black text-slate-100 group-hover:text-blue-100 transition dark:text-white/5 dark:group-hover:text-blue-500/10">
                                    {item.number}
                                </div>

                                <div className="relative z-10">
                                    <span
                                        className="
                                            inline-block
                                            px-4
                                            py-2
                                            rounded-full
                                            bg-blue-50
                                            text-blue-700
                                            text-sm
                                            font-semibold
                                            dark:bg-blue-500/10
                                            dark:text-blue-300
                                        "
                                    >
                                        {item.label}
                                    </span>

                                    <h3 className="mt-6 text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition dark:text-white dark:group-hover:text-blue-400">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-slate-500 dark:text-slate-300 leading-8 max-w-3xl">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}