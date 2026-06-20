export default function Awards() {
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
            "
        >
            <div className="absolute top-10 right-0 w-[520px] h-[520px] bg-amber-300/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center">
                    <p className="text-amber-600 font-semibold">
                        AWARDS & RESEARCH IMPACT
                    </p>

                    <h2 className="text-5xl font-bold mt-3 text-slate-900">
                        Research Recognition
                    </h2>

                    <p className="mt-5 text-slate-500 max-w-2xl mx-auto leading-8">
                        Recognition from AI and Computer Vision research focused on
                        small object detection in remote sensing imagery.
                    </p>
                </div>

                <div
                    className="
                        mt-20
                        rounded-[40px]
                        bg-gradient-to-br
                        from-slate-950
                        via-amber-900
                        to-slate-900
                        text-white
                        p-12
                        relative
                        overflow-hidden
                        shadow-2xl
                    "
                >
                    <div className="absolute right-10 top-0 text-[150px] font-black text-white/5">
                        AWARD
                    </div>

                    <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 relative z-10">
                        <div>
                            <p className="text-amber-300 font-semibold">
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
                            <h4 className="text-3xl font-bold leading-snug">
                                Improved Small Object Detection with YOLOv8
                            </h4>

                            <p className="mt-6 text-slate-300 leading-8">
                                The research proposed a modified YOLOv8 model by
                                replacing C2f with C3 layers, adding neck and head
                                components, and optimizing the loss function using WIoU
                                to improve remote sensing object detection performance.
                            </p>

                            <div className="grid md:grid-cols-3 gap-5 mt-10">
                                <div className="bg-white/10 rounded-3xl p-6">
                                    <h5 className="text-4xl font-black text-amber-300">
                                        77.183%
                                    </h5>

                                    <p className="mt-2 text-slate-300">
                                        Best Model Performance
                                    </p>
                                </div>

                                <div className="bg-white/10 rounded-3xl p-6">
                                    <h5 className="text-4xl font-black text-amber-300">
                                        +0.875%
                                    </h5>

                                    <p className="mt-2 text-slate-300">
                                        Improvement Over Baseline
                                    </p>
                                </div>

                                <div className="bg-white/10 rounded-3xl p-6">
                                    <h5 className="text-4xl font-black text-amber-300">
                                        DIOR
                                    </h5>

                                    <p className="mt-2 text-slate-300">
                                        Remote Sensing Dataset
                                    </p>
                                </div>
                            </div>

                            <a
                                href="https://ieeexplore.ieee.org/document/10913393/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    inline-block
                                    mt-10
                                    bg-white
                                    text-amber-700
                                    px-6
                                    py-3
                                    rounded-xl
                                    font-semibold
                                    hover:bg-amber-50
                                    transition
                                "
                            >
                                View Publication →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}