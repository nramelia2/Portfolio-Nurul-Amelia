export default function ResearchImpact() {
    const impacts = [
        {
            number: "06",
            label: "IEEE Publications",
        },
        {
            number: "01",
            label: "Best Paper Award",
        },
        {
            number: "05",
            label: "Research Projects",
        },
        {
            number: "02+",
            label: "Years Research",
        },
    ];

    return (
        <section
            id="research-impact"
            className="
                py-32
                relative
                overflow-hidden
                bg-gradient-to-br
                from-slate-950
                via-blue-950
                to-slate-900
                text-white
            "
        >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center">
                    <p className="text-blue-300 font-semibold">
                        RESEARCH IMPACT
                    </p>

                    <h2 className="text-5xl font-black mt-3">
                        Research That Creates Value
                    </h2>

                    <p className="mt-5 text-blue-100 max-w-2xl mx-auto leading-8">
                        A research journey focused on Artificial Intelligence,
                        Computer Vision, Remote Sensing, and intelligent detection systems.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 mt-20">
                    {impacts.map((item) => (
                        <div
                            key={item.label}
                            className="
                                group
                                text-center
                                border-t
                                border-white/20
                                pt-8
                                hover:-translate-y-3
                                transition-all
                                duration-300
                            "
                        >
                            <h3 className="
                                text-7xl
                                font-black
                                text-transparent
                                bg-clip-text
                                bg-gradient-to-r
                                from-blue-300
                                to-cyan-300
                            ">
                                {item.number}
                            </h3>

                            <p className="mt-4 text-blue-100">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>

                <div
                    className="
                        mt-20
                        rounded-[36px]
                        bg-white/10
                        backdrop-blur
                        border
                        border-white/10
                        p-10
                    "
                >
                    <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
                        <div>
                            <p className="text-blue-300 font-semibold">
                                KEY RESEARCH AREA
                            </p>

                            <h3 className="text-4xl font-bold mt-3">
                                Small Object Detection
                            </h3>
                        </div>

                        <p className="text-blue-100 leading-8">
                            Focused on improving YOLO-based object detection
                            for remote sensing imagery through architecture
                            modification, detection head enhancement, and loss
                            function optimization.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}