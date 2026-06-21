import { FaAward, FaChartLine, FaDatabase, FaExternalLinkAlt } from "react-icons/fa";

export default function Awards() {
    const metrics = [
        {
            value: "77.183%",
            label: "Best Model Performance",
            icon: <FaChartLine />,
        },
        {
            value: "+0.875%",
            label: "Improvement Over Baseline",
            icon: <FaAward />,
        },
        {
            value: "DIOR",
            label: "Remote Sensing Dataset",
            icon: <FaDatabase />,
        },
    ];

    return (
        <section
            id="awards"
            className="
                py-32
                relative
                overflow-hidden
                bg-gradient-to-b
                from-white
                via-amber-50/40
                to-white
                dark:from-slate-950
                dark:via-slate-900
                dark:to-slate-950
            "
        >
            <div className="absolute top-10 right-0 w-[520px] h-[520px] bg-amber-300/20 dark:bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-0 w-[420px] h-[420px] bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-end">
                    <div>
                        <p className="text-amber-600 dark:text-amber-400 font-semibold tracking-[0.2em]">
                            AWARDS
                        </p>

                        <h2 className="text-5xl lg:text-6xl font-black mt-4 text-slate-900 dark:text-white leading-tight">
                            Research
                            <br />
                            Recognition
                        </h2>
                    </div>

                    <p className="text-slate-500 dark:text-slate-300 max-w-2xl leading-8">
                        Recognition from AI and Computer Vision research focused on
                        improving small object detection in remote sensing imagery.
                    </p>
                </div>

                <div
                    className="
                        mt-20
                        rounded-[44px]
                        bg-gradient-to-br
                        from-slate-950
                        via-amber-900
                        to-slate-900
                        text-white
                        p-10
                        lg:p-12
                        relative
                        overflow-hidden
                        shadow-2xl
                        border
                        border-white/10
                        dark:from-slate-900
                        dark:via-amber-950
                        dark:to-slate-950
                        dark:border-slate-800
                    "
                >
                    <div className="absolute right-10 top-0 text-[150px] font-black text-white/5 select-none">
                        AWARD
                    </div>

                    <div className="absolute -right-24 -bottom-24 w-[360px] h-[360px] bg-amber-400/20 rounded-full blur-3xl" />

                    <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-14 relative z-10">
                        <div>
                            <div
                                className="
                                    w-16
                                    h-16
                                    rounded-3xl
                                    bg-amber-400/20
                                    text-amber-300
                                    flex
                                    items-center
                                    justify-center
                                    text-3xl
                                    border
                                    border-amber-300/20
                                "
                            >
                                <FaAward />
                            </div>

                            <p className="text-amber-300 font-semibold mt-8">
                                BEST PAPER AWARD
                            </p>

                            <h3 className="text-5xl font-black mt-4 leading-tight">
                                ICOIACT
                                <br />
                                2024
                            </h3>

                            <p className="mt-6 text-amber-100 leading-8">
                                Awarded for research contribution in improving YOLOv8
                                architecture for small object detection in remote sensing imagery.
                            </p>
                        </div>

                        <div>
                            <span
                                className="
                                    inline-block
                                    px-4
                                    py-2
                                    rounded-full
                                    bg-white/10
                                    text-amber-200
                                    border
                                    border-white/10
                                    text-sm
                                    font-medium
                                "
                            >
                                Computer Vision • Remote Sensing • YOLOv8
                            </span>

                            <h4 className="text-3xl lg:text-4xl font-black leading-snug mt-6">
                                Improved Small Object Detection with YOLOv8
                            </h4>

                            <p className="mt-6 text-slate-300 leading-8">
                                The research proposed a modified YOLOv8 model by
                                replacing C2f with C3 layers, adding neck and head
                                components, and optimizing the loss function using WIoU
                                to improve remote sensing object detection performance.
                            </p>

                            <div className="grid md:grid-cols-3 gap-5 mt-10">
                                {metrics.map((item) => (
                                    <div
                                        key={item.label}
                                        className="
                                            group
                                            bg-white/10
                                            rounded-3xl
                                            p-6
                                            border
                                            border-white/10
                                            backdrop-blur
                                            hover:bg-white/15
                                            hover:-translate-y-2
                                            transition-all
                                            duration-300
                                        "
                                    >
                                        <div className="text-amber-300 text-2xl">
                                            {item.icon}
                                        </div>

                                        <h5 className="text-4xl font-black text-amber-300 mt-5">
                                            {item.value}
                                        </h5>

                                        <p className="mt-3 text-slate-300 leading-6">
                                            {item.label}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="https://ieeexplore.ieee.org/document/10913393/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    inline-flex
                                    items-center
                                    gap-3
                                    mt-10
                                    bg-white
                                    text-amber-700
                                    px-6
                                    py-3
                                    rounded-xl
                                    font-semibold
                                    hover:bg-amber-50
                                    hover:-translate-y-1
                                    hover:shadow-xl
                                    transition-all
                                "
                            >
                                View Publication
                                <FaExternalLinkAlt className="text-sm" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}