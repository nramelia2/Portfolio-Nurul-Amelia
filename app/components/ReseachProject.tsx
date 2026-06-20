export default function ResearchProjects() {
    const projects = [
        {
            number: "01",
            title: "EXYOLOv8",
            year: "2024 - 2025",
            category: "Computer Vision • Remote Sensing",
            result: "+5% mAP",
            link: "https://ieeexplore.ieee.org/document/10913393/",
            description:
                "Developed a modified YOLOv8 architecture for small object detection in remote sensing imagery by optimizing model structure and loss functions.",
            tags: ["YOLOv8", "Deep Learning", "WIoU", "Remote Sensing"],
        },
        {
            number: "02",
            title: "Sign Language Translator",
            year: "2023",
            category: "Deep Learning • Accessibility",
            result: "99.5% Accuracy",
            link: "https://ieeexplore.ieee.org/document/10285793",
            description:
                "Designed a real-time Indonesian Sign Language recognition system using YOLOv5 and PyTorch, integrated into a deployable application.",
            tags: ["YOLOv5", "PyTorch", "Flask", "Docker"],
        },
    ];

    return (
        <section
            id="research-projects"
            className="
                py-32
                relative
                overflow-hidden
                bg-gradient-to-b
                from-blue-50/50
                via-white
                to-white
            "
        >
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                    <div>
                        <p className="text-blue-600 font-semibold">
                            RESEARCH PROJECTS
                        </p>

                        <h2 className="text-5xl font-black mt-3 text-slate-900">
                            Applied AI
                            <br />
                            Research Works
                        </h2>
                    </div>

                    <p className="text-slate-500 max-w-xl leading-8">
                        Selected research projects that demonstrate AI modeling,
                        computer vision experimentation, and real-world problem solving.
                    </p>
                </div>

                <div className="mt-20 space-y-8">
                    {projects.map((project) => (
                        <a
                            key={project.number}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                group
                                grid
                                lg:grid-cols-[160px_1fr_260px]
                                gap-8
                                items-center
                                rounded-[36px]
                                bg-white
                                border
                                border-slate-100
                                p-8
                                shadow-sm
                                hover:shadow-2xl
                                hover:-translate-y-2
                                transition-all
                                duration-500
                                overflow-hidden
                                relative
                            "
                        >
                            <div className="absolute right-0 top-0 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition" />

                            <div className="relative z-10">
                                <p className="text-7xl font-black text-slate-200 group-hover:text-blue-200 transition">
                                    {project.number}
                                </p>
                            </div>

                            <div className="relative z-10">
                                <p className="text-blue-600 font-semibold">
                                    {project.year}
                                </p>

                                <h3 className="text-4xl font-bold mt-3 text-slate-900 group-hover:text-blue-600 transition">
                                    {project.title}
                                </h3>

                                <p className="text-slate-500 mt-2">
                                    {project.category}
                                </p>

                                <p className="mt-5 text-slate-600 leading-8 max-w-3xl">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mt-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="
                                                px-4
                                                py-2
                                                bg-blue-50
                                                text-blue-700
                                                rounded-full
                                                text-sm
                                                font-medium
                                            "
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 flex lg:justify-end">
                                <div className="bg-slate-900 text-white rounded-3xl p-7 min-w-[220px] group-hover:bg-blue-600 transition">
                                    <p className="text-slate-300 text-sm">
                                        Key Result
                                    </p>

                                    <h4 className="text-3xl font-black mt-2">
                                        {project.result}
                                    </h4>

                                    <p className="mt-5 font-semibold">
                                        View Research →
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}