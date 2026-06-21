import {
    FaAward,
    FaFileAlt,
    FaFlask,
    FaClock,
    FaBullseye,
} from "react-icons/fa";

export default function ResearchImpact() {
    const impacts = [
        {
            number: "06",
            label: "IEEE Publications",
            icon: <FaFileAlt />,
        },
        {
            number: "01",
            label: "Best Paper Award",
            icon: <FaAward />,
        },
        {
            number: "05",
            label: "Research Projects",
            icon: <FaFlask />,
        },
        {
            number: "02+",
            label: "Years Research",
            icon: <FaClock />,
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
                dark:from-slate-950
                dark:via-blue-950
                dark:to-slate-950
            "
        >
            <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-indigo-500/20 rounded-full blur-3xl" />

            <div className="absolute right-10 top-10 text-[170px] font-black text-white/5 select-none">
                IMPACT
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-end">
                    <div>
                        <p className="text-blue-300 font-semibold tracking-[0.2em]">
                            RESEARCH IMPACT
                        </p>

                        <h2 className="text-5xl lg:text-6xl font-black mt-4 leading-tight">
                            Research That
                            <br />
                            Creates Value
                        </h2>
                    </div>

                    <p className="text-blue-100 max-w-2xl leading-8">
                        A research journey focused on Artificial Intelligence,
                        Computer Vision, Remote Sensing, and intelligent detection
                        systems with measurable academic contribution.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-5 mt-20">
                    {impacts.map((item) => (
                        <div
                            key={item.label}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-[32px]
                                bg-white/10
                                border
                                border-white/10
                                p-7
                                backdrop-blur
                                hover:-translate-y-3
                                hover:bg-white/15
                                hover:border-blue-300/30
                                transition-all
                                duration-500
                            "
                        >
                            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition" />

                            <div className="relative z-10">
                                <div
                                    className="
                                        w-12
                                        h-12
                                        rounded-2xl
                                        bg-blue-500/20
                                        text-blue-300
                                        flex
                                        items-center
                                        justify-center
                                        text-xl
                                        group-hover:bg-blue-500
                                        group-hover:text-white
                                        transition-all
                                    "
                                >
                                    {item.icon}
                                </div>

                                <h3
                                    className="
                                        mt-8
                                        text-7xl
                                        font-black
                                        text-transparent
                                        bg-clip-text
                                        bg-gradient-to-r
                                        from-blue-300
                                        to-cyan-300
                                    "
                                >
                                    {item.number}
                                </h3>

                                <p className="mt-4 text-blue-100">
                                    {item.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    className="
                        mt-20
                        rounded-[40px]
                        bg-white/10
                        backdrop-blur
                        border
                        border-white/10
                        p-10
                        relative
                        overflow-hidden
                        hover:bg-white/15
                        transition-all
                        duration-500
                    "
                >
                    <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />

                    <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center relative z-10">
                        <div>
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 text-blue-300 flex items-center justify-center text-2xl">
                                <FaBullseye />
                            </div>

                            <p className="text-blue-300 font-semibold mt-6">
                                KEY RESEARCH AREA
                            </p>

                            <h3 className="text-4xl font-black mt-3">
                                Small Object Detection
                            </h3>
                        </div>

                        <p className="text-blue-100 leading-8">
                            Focused on improving YOLO-based object detection for
                            remote sensing imagery through architecture modification,
                            detection head enhancement, and loss function optimization.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}