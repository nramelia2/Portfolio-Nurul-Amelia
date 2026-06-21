import {
    FaBullseye,
    FaLightbulb,
    FaChartLine,
} from "react-icons/fa";

export default function ResearchProjects() {
    const projects = [
        {
            number: "01",
            title: "EXYOLOv8",
            year: "2024 - 2025",
            category: "Computer Vision • Remote Sensing",
            result: "+5% mAP",
            link: "https://ieeexplore.ieee.org/document/10913393/",
            problem:
                "Detecting very small objects in remote sensing imagery remains challenging due to scale variation and dense object distribution.",
            solution:
                "Enhanced YOLOv8 architecture with optimized feature extraction and improved loss functions for small-object detection.",
            outcome:
                "Improved detection performance and resulted in an IEEE publication related to remote sensing object detection.",
            tags: ["YOLOv8", "Deep Learning", "WIoU", "Remote Sensing"],
        },
        {
            number: "02",
            title: "Indonesian Sign Language Translator",
            year: "2023",
            category: "Deep Learning • Accessibility",
            result: "99.5% Accuracy",
            link: "https://ieeexplore.ieee.org/document/10285793",
            problem:
                "Communication barriers remain a challenge for deaf communities when interacting with people who do not understand sign language.",
            solution:
                "Designed a real-time Indonesian Sign Language recognition system using YOLOv5 and PyTorch, integrated into a deployable application.",
            outcome:
                "Achieved high classification accuracy and supported accessibility-focused AI implementation.",
            tags: ["YOLOv5", "PyTorch", "Flask", "Docker"],
        },
    ];

    const sections = [
        {
            label: "Problem",
            icon: <FaBullseye />,
        },
        {
            label: "Solution",
            icon: <FaLightbulb />,
        },
        {
            label: "Outcome",
            icon: <FaChartLine />,
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
                to-blue-50/30
                dark:from-slate-950
                dark:via-slate-900
                dark:to-slate-950
            "
        >
            <div className="absolute top-20 right-0 w-[520px] h-[520px] bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-0 w-[460px] h-[460px] bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-end">
                    <div>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-[0.2em]">
                            RESEARCH PROJECTS
                        </p>

                        <h2 className="text-5xl lg:text-6xl font-black mt-4 text-slate-900 dark:text-white leading-tight">
                            Applied AI
                            <br />
                            Research Works
                        </h2>
                    </div>

                    <p className="text-slate-500 dark:text-slate-300 max-w-xl leading-8">
                        Selected research projects that demonstrate AI modeling,
                        computer vision experimentation, and real-world problem solving.
                    </p>
                </div>

                <div className="mt-20 space-y-10">
                    {projects.map((project) => {
                        const contentMap: Record<string, string> = {
                            Problem: project.problem,
                            Solution: project.solution,
                            Outcome: project.outcome,
                        };

                        return (
                            <a
                                key={project.number}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group
                                    block
                                    relative
                                    overflow-hidden
                                    rounded-[42px]
                                    bg-white
                                    border
                                    border-slate-100
                                    shadow-xl
                                    shadow-blue-100/40
                                    hover:shadow-2xl
                                    hover:shadow-blue-200/60
                                    hover:-translate-y-2
                                    transition-all
                                    duration-500
                                    dark:bg-slate-900/80
                                    dark:border-slate-700
                                    dark:shadow-none
                                    dark:hover:border-blue-500/40
                                "
                            >
                                <div className="grid lg:grid-cols-[1fr_320px] relative z-10">
                                    <div className="relative p-10 lg:p-12 overflow-hidden">
                                        <div
                                            className="
                                                absolute
                                                left-8
                                                top-10
                                                text-[120px]
                                                leading-none
                                                font-black
                                                text-blue-50
                                                group-hover:text-blue-100
                                                transition-all
                                                duration-500
                                                dark:text-white/5
                                                dark:group-hover:text-blue-500/10
                                            "
                                        >
                                            {project.number}
                                        </div>

                                        <div className="relative z-10 lg:ml-28">
                                            <div className="flex flex-wrap gap-3">
                                                <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium dark:bg-blue-500/10 dark:text-blue-300">
                                                    {project.year}
                                                </span>

                                                <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium dark:bg-slate-800 dark:text-slate-300">
                                                    {project.category}
                                                </span>
                                            </div>

                                            <h3 className="mt-8 text-4xl font-black text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition">
                                                {project.title}
                                            </h3>

                                            <div className="grid md:grid-cols-3 gap-7 mt-10">
                                                {sections.map((item) => (
                                                    <div key={item.label}>
                                                        <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-bold">
                                                            <span
                                                                className="
                                                                    w-9
                                                                    h-9
                                                                    rounded-full
                                                                    bg-blue-50
                                                                    flex
                                                                    items-center
                                                                    justify-center
                                                                    text-blue-600
                                                                    group-hover:bg-blue-100
                                                                    transition
                                                                    dark:bg-blue-500/10
                                                                    dark:text-blue-300
                                                                    dark:group-hover:bg-blue-500/20
                                                                "
                                                            >
                                                                {item.icon}
                                                            </span>

                                                            {item.label}
                                                        </div>

                                                        <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
                                                            {contentMap[item.label]}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex flex-wrap gap-3 mt-9">
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
                                                            transition-all
                                                            group-hover:bg-blue-100
                                                            dark:bg-blue-500/10
                                                            dark:text-blue-300
                                                            dark:group-hover:bg-blue-500/20
                                                        "
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="
                                            relative
                                            overflow-hidden
                                            bg-gradient-to-br
                                            from-slate-950
                                            via-blue-950
                                            to-slate-950
                                            text-white
                                            p-10
                                            flex
                                            flex-col
                                            justify-between
                                            min-h-[360px]
                                            transition-all
                                            duration-500
                                            group-hover:from-blue-600
                                            group-hover:via-blue-700
                                            group-hover:to-indigo-800
                                            dark:from-slate-950
                                            dark:via-blue-950
                                            dark:to-slate-950
                                            dark:group-hover:from-blue-600
                                            dark:group-hover:via-blue-700
                                            dark:group-hover:to-indigo-800
                                        "
                                    >
                                        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                                        <div className="relative z-10">
                                            <p className="text-blue-300 group-hover:text-blue-100 font-semibold transition">
                                                Research Outcome
                                            </p>

                                            <h4 className="mt-6 text-5xl font-black leading-tight">
                                                {project.result}
                                            </h4>
                                        </div>

                                        <div className="relative z-10">
                                            <div className="h-px bg-white/10 mb-7" />

                                            <p className="text-slate-300 group-hover:text-blue-50 leading-7 transition">
                                                Published in IEEE conference proceedings
                                                and presented as applied AI research.
                                            </p>

                                            <div className="mt-8 inline-flex items-center gap-3 text-blue-300 group-hover:text-white font-semibold group-hover:translate-x-2 transition-all">
                                                View Publication →
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}