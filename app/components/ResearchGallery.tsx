export default function ResearchGallery() {
    const researchItems = [
        {
            number: "01",
            title: "EXYOLOv8",
            category: "Remote Sensing Object Detection",
            description:
                "Modified YOLOv8 architecture for small object detection in remote sensing imagery using enhanced backbone, neck, detection head, and WIoU loss optimization.",
            year: "2025",
            link: "https://ieeexplore.ieee.org/document/10913393/",
            accent: "from-blue-600 to-indigo-600",
            visual: "YOLOv8",
        },
        {
            number: "02",
            title: "Fall Detection System",
            category: "AI Healthcare",
            description:
                "Elderly fall detection system combining OpenPose and YOLO to support intelligent monitoring and safety-oriented computer vision applications.",
            year: "2024",
            link: "https://ieeexplore.ieee.org/document/10468014",
            accent: "from-indigo-600 to-purple-600",
            visual: "POSE",
        },
        {
            number: "03",
            title: "Cattle Monitoring",
            category: "UAV Remote Sensing",
            description:
                "Precision cattle monitoring using UAV imagery and Single Shot Detection to support aerial insight and livestock observation.",
            year: "2024",
            link: "https://ieeexplore.ieee.org/document/10467300",
            accent: "from-cyan-600 to-blue-600",
            visual: "UAV",
        },
        {
            number: "04",
            title: "Sign Language Recognition",
            category: "Deep Learning Application",
            description:
                "YOLO-based Indonesian Sign Language recognition system designed to classify static gestures and support accessibility-focused AI applications.",
            year: "2023",
            link: "https://ieeexplore.ieee.org/document/10285793",
            accent: "from-sky-600 to-indigo-600",
            visual: "YOLO",
        },
    ];

    return (
        <section
            id="research-gallery"
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
            <div className="absolute top-20 right-0 w-[520px] h-[520px] bg-blue-300/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-indigo-300/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                    <div>
                        <p className="text-blue-600 font-semibold">
                            RESEARCH GALLERY
                        </p>

                        <h2 className="text-5xl lg:text-6xl font-black mt-3 text-slate-900">
                            Visual Research
                            <br />
                            Showcase
                        </h2>
                    </div>

                    <p className="text-slate-500 max-w-xl leading-8">
                        Selected AI and Computer Vision research projects presented
                        as visual case studies, connecting academic work with practical
                        intelligent systems.
                    </p>
                </div>

                <div className="mt-20 space-y-10">
                    {researchItems.map((item, index) => (
                        <a
                            key={item.number}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                group
                                grid
                                lg:grid-cols-[0.9fr_1.1fr]
                                gap-0
                                rounded-[40px]
                                overflow-hidden
                                bg-white
                                border
                                border-slate-100
                                shadow-sm
                                hover:shadow-2xl
                                transition-all
                                duration-500
                            "
                        >
                            <div
                                className={`
                                    relative
                                    min-h-[360px]
                                    bg-gradient-to-br
                                    ${item.accent}
                                    p-10
                                    text-white
                                    overflow-hidden
                                `}
                            >
                                <div className="absolute right-8 top-0 text-[140px] font-black text-white/10">
                                    {item.number}
                                </div>

                                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-2xl" />

                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div>
                                        <p className="text-white/70 font-semibold">
                                            {item.year}
                                        </p>

                                        <h3 className="text-5xl font-black mt-4">
                                            {item.visual}
                                        </h3>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="h-24 rounded-2xl bg-white/15 backdrop-blur group-hover:scale-105 transition-transform" />
                                        <div className="h-24 rounded-2xl bg-white/20 backdrop-blur group-hover:scale-105 transition-transform delay-75" />
                                        <div className="h-24 rounded-2xl bg-white/20 backdrop-blur group-hover:scale-105 transition-transform delay-100" />
                                        <div className="h-24 rounded-2xl bg-white/15 backdrop-blur group-hover:scale-105 transition-transform delay-150" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 lg:p-12 flex flex-col justify-center">
                                <div className="flex flex-wrap gap-3 items-center">
                                    <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                                        {item.category}
                                    </span>

                                    <span className="text-slate-400">
                                        {item.year}
                                    </span>
                                </div>

                                <h3 className="text-4xl font-bold mt-6 text-slate-900 group-hover:text-blue-600 transition">
                                    {item.title}
                                </h3>

                                <p className="mt-6 text-slate-500 leading-8">
                                    {item.description}
                                </p>

                                <div className="mt-8 text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                                    View Research →
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}