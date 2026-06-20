export default function Difference() {
    const points = [
        {
            number: "01",
            title: "Engineering Background",
            desc: "Strong foundation in Electrical and Computer Engineering, with experience solving technical problems using structured analytical thinking.",
        },
        {
            number: "02",
            title: "Industry Data Experience",
            desc: "Hands-on experience building ETL pipelines, KPI dashboards, reporting automation, and data validation workflows in telecommunication operations.",
        },
        {
            number: "03",
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
            "
        >
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center">
                    <p className="text-blue-600 font-semibold">
                        WHY ME
                    </p>

                    <h2 className="text-5xl font-black mt-3 text-slate-900">
                        What Makes Me Different
                    </h2>

                    <p className="mt-5 text-slate-500 max-w-2xl mx-auto leading-8">
                        A unique combination of engineering background, real-world
                        data experience, and AI research capability.
                    </p>
                </div>

                <div className="mt-20 space-y-8">
                    {points.map((item) => (
                        <div
                            key={item.number}
                            className="
                                group
                                grid
                                lg:grid-cols-[180px_1fr]
                                gap-8
                                items-center
                                border-t
                                border-slate-200
                                pt-8
                                hover:pl-4
                                transition-all
                                duration-300
                            "
                        >
                            <div className="
                                text-7xl
                                font-black
                                text-slate-200
                                group-hover:text-blue-200
                                transition
                            ">
                                {item.number}
                            </div>

                            <div>
                                <h3 className="
                                    text-3xl
                                    font-bold
                                    text-slate-900
                                    group-hover:text-blue-600
                                    transition
                                ">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-slate-500 leading-8 max-w-3xl">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}