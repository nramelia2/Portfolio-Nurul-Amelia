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
            "
        >
            {/* Glow */}
            <div className="
                absolute
                left-0
                top-20
                w-[500px]
                h-[500px]
                bg-blue-200/30
                rounded-full
                blur-3xl
            "/>

            <div className="max-w-6xl mx-auto px-6 relative">

                <div className="text-center mb-24">
                    <p className="text-blue-600 font-semibold">
                        PUBLICATIONS
                    </p>

                    <h2 className="text-5xl font-bold mt-3">
                        Research Contributions
                    </h2>

                    <p className="
                        mt-5
                        text-slate-500
                        max-w-2xl
                        mx-auto
                    ">
                        Scientific publications in Artificial Intelligence,
                        Machine Learning, Computer Vision,
                        and Remote Sensing.
                    </p>
                </div>

                {Object.entries(grouped)
                    .sort((a, b) => Number(b[0]) - Number(a[0]))
                    .map(([year, papers]) => (
                        <div
                            key={year}
                            className="mb-20"
                        >
                            <div className="
                                flex
                                items-center
                                gap-6
                                mb-10
                            ">
                                <h3 className="
                                    text-7xl
                                    font-black
                                    text-blue-600
                                ">
                                    {year}
                                </h3>

                                <div className="
                                    flex-1
                                    h-[2px]
                                    bg-gradient-to-r
                                    from-blue-600
                                    to-transparent
                                "/>
                            </div>

                            <div className="space-y-5">

                                {papers.map((paper) => (
                                    <a
                                        key={paper.link}
                                        href={paper.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            group
                                            flex
                                            justify-between
                                            items-center
                                            gap-10
                                            p-8
                                            rounded-3xl
                                            hover:bg-white
                                            hover:shadow-xl
                                            transition-all
                                            duration-300
                                        "
                                    >
                                        <div>
                                            <span className="
                                                inline-block
                                                px-3
                                                py-1
                                                rounded-full
                                                bg-blue-100
                                                text-blue-700
                                                text-sm
                                            ">
                                                {paper.category}
                                            </span>

                                            <h4 className="
                                                mt-4
                                                text-2xl
                                                font-semibold
                                                text-slate-900
                                                group-hover:text-blue-600
                                                transition
                                            ">
                                                {paper.title}
                                            </h4>
                                        </div>

                                        <div className="
                                            text-5xl
                                            text-slate-300
                                            group-hover:text-blue-500
                                            hover:shadow-[0_25px_50px_rgba(37,99,235,0.15)]
                                            transition-all
                                        ">
                                            ↗
                                        </div>
                                    </a>
                                ))}

                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
}