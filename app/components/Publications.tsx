export default function Publications() {
    const publications = [
        {
            year: "2025",
            title:
                "Improved Small Object Detection with YOLOv8 in Remote Sensing Imagery: Architecture Modifications and Loss Function Optimization",
            category: "Computer Vision",
            link: "https://ieeexplore.ieee.org/document/10913393/",
        },
        {
            year: "2024",
            title:
                "Deciphering Political Discourse on X: A Deep Dive into SVM vs. Naïve Bayes Approaches",
            category: "Machine Learning",
            link: "https://ieeexplore.ieee.org/document/10475056",
        },
        {
            year: "2024",
            title:
                "Empowering Elderly Care: Innovative Fall Detection with OpenPose and YOLO",
            category: "Computer Vision",
            link: "https://ieeexplore.ieee.org/document/10468014",
        },
        {
            year: "2024",
            title:
                "Aerial Insights: Precision Cattle Monitoring Using UAV Imagery and Single Shot Detection",
            category: "Remote Sensing",
            link: "https://ieeexplore.ieee.org/document/10467300",
        },
        {
            year: "2023",
            title:
                "Violation Detection on the Roadside of the Toll Roads using Cascade R-CNN Algorithm",
            category: "Object Detection",
            link: "https://ieeexplore.ieee.org/document/10295632",
        },
        {
            year: "2023",
            title:
                "Utilizing YOLO for Efficient Indonesian Sign Language Recognition",
            category: "Deep Learning",
            link: "https://ieeexplore.ieee.org/document/10285793",
        },
    ];

    const grouped = publications.reduce((acc, paper) => {
        if (!acc[paper.year]) acc[paper.year] = [];
        acc[paper.year].push(paper);
        return acc;
    }, {} as Record<string, typeof publications>);

    return (
        <section
            id="publications"
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
            <div className="absolute left-0 top-20 w-[500px] h-[500px] bg-blue-200/30 dark:bg-blue-600/10 rounded-full blur-3xl" />
            <div className="absolute right-0 bottom-20 w-[420px] h-[420px] bg-indigo-200/30 dark:bg-indigo-600/10 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-end mb-24">
                    <div>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-[0.2em]">
                            PUBLICATIONS
                        </p>

                        <h2 className="text-5xl lg:text-6xl font-black mt-4 text-slate-900 dark:text-white leading-tight">
                            Research
                            <br />
                            Contributions
                        </h2>
                    </div>

                    <p className="text-slate-500 dark:text-slate-300 max-w-2xl leading-8">
                        Scientific publications in Artificial Intelligence,
                        Machine Learning, Computer Vision, and Remote Sensing,
                        presented through IEEE conference proceedings.
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute left-[38px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 via-indigo-500 to-transparent dark:from-blue-400 dark:via-indigo-500" />

                    {Object.entries(grouped)
                        .sort((a, b) => Number(b[0]) - Number(a[0]))
                        .map(([year, papers]) => (
                            <div key={year} className="relative pl-24 mb-20 last:mb-0">
                                <div
                                    className="
                                        absolute
                                        left-0
                                        top-0
                                        w-20
                                        h-20
                                        rounded-3xl
                                        bg-blue-600
                                        text-white
                                        flex
                                        items-center
                                        justify-center
                                        font-black
                                        shadow-xl
                                        shadow-blue-200/60
                                        dark:shadow-none
                                    "
                                >
                                    {year}
                                </div>

                                <div className="space-y-5 pt-1">
                                    {papers.map((paper, index) => (
                                        <a
                                            key={paper.link}
                                            href={paper.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                                                group
                                                relative
                                                grid
                                                lg:grid-cols-[1fr_auto]
                                                gap-8
                                                items-center
                                                p-7
                                                rounded-[28px]
                                                bg-white/70
                                                border
                                                border-slate-100
                                                shadow-sm
                                                hover:bg-white
                                                hover:shadow-2xl
                                                hover:-translate-y-1
                                                transition-all
                                                duration-300
                                                dark:bg-slate-900/70
                                                dark:border-slate-700
                                                dark:hover:bg-slate-900
                                                dark:hover:border-blue-500/40
                                            "
                                        >
                                            <div className="absolute right-6 top-5 text-6xl font-black text-slate-100 dark:text-white/5 group-hover:text-blue-100 dark:group-hover:text-blue-500/10 transition">
                                                0{index + 1}
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
                                                        font-medium
                                                        dark:bg-blue-500/10
                                                        dark:text-blue-300
                                                    "
                                                >
                                                    {paper.category}
                                                </span>

                                                <h4
                                                    className="
                                                        mt-4
                                                        text-2xl
                                                        font-bold
                                                        text-slate-900
                                                        leading-snug
                                                        group-hover:text-blue-600
                                                        transition
                                                        dark:text-white
                                                        dark:group-hover:text-blue-400
                                                    "
                                                >
                                                    {paper.title}
                                                </h4>

                                                <p className="mt-3 text-slate-400 dark:text-slate-500 text-sm">
                                                    IEEE Conference Paper • {year}
                                                </p>
                                            </div>

                                            <div
                                                className="
                                                    relative
                                                    z-10
                                                    w-14
                                                    h-14
                                                    rounded-2xl
                                                    bg-slate-900
                                                    text-white
                                                    flex
                                                    items-center
                                                    justify-center
                                                    text-2xl
                                                    group-hover:bg-blue-600
                                                    group-hover:translate-x-1
                                                    transition-all
                                                    dark:bg-slate-800
                                                    dark:group-hover:bg-blue-600
                                                "
                                            >
                                                ↗
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}