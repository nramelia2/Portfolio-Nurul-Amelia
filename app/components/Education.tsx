import {
    FaGraduationCap,
    FaBrain,
    FaLaptopCode,
    FaAward,
} from "react-icons/fa";

export default function Education() {
    const educations = [
        {
            period: "Aug 2023 - Jan 2025",
            degree: "Master of Electrical Engineering",
            school: "Telkom University",
            desc: "Focused on Control and Intelligent Systems, Computer Vision, and Artificial Intelligence. Completed thesis research on EXYOLOv8 for enhanced small object detection in remote sensing imagery.",
            color: "blue",
            tags: ["Cum Laude", "GPA 3.91/4.00", "Computer Vision", "Artificial Intelligence"],
        },
        {
            period: "Aug 2019 - Aug 2023",
            degree: "Bachelor of Computer Engineering",
            school: "Telkom University",
            desc: "Developed a strong foundation in computing, software development, embedded systems, and intelligent applications. Completed a capstone project on Sign Language Translator using Deep Learning.",
            color: "indigo",
            tags: ["Cum Laude", "GPA 3.77/4.00", "Deep Learning", "Computer Engineering"],
        },
    ];

    return (
        <section
            id="education"
            className="
                py-32
                relative
                overflow-hidden
                bg-gradient-to-b
                from-white
                via-blue-50/30
                to-white
                dark:from-slate-950
                dark:via-slate-900
                dark:to-slate-950
            "
        >
            <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-0 w-[420px] h-[420px] bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-end">
                    <div>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-[0.2em]">
                            EDUCATION
                        </p>

                        <h2 className="text-5xl lg:text-6xl font-black mt-4 text-slate-900 dark:text-white leading-tight">
                            Academic
                            <br />
                            Journey
                        </h2>
                    </div>

                    <p className="text-slate-500 dark:text-slate-300 max-w-2xl leading-8">
                        Academic background in Electrical Engineering, Computer Engineering,
                        Artificial Intelligence, and Computer Vision research.
                    </p>
                </div>

                <div className="mt-20 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
                    <div
                        className="
                            bg-slate-900
                            text-white
                            rounded-[44px]
                            p-10
                            relative
                            overflow-hidden
                            shadow-2xl
                            border
                            border-white/10
                            dark:bg-gradient-to-br
                            dark:from-slate-900
                            dark:via-blue-950
                            dark:to-slate-950
                            dark:border-slate-800
                        "
                    >
                        <div className="absolute right-6 top-0 text-[130px] font-black text-white/5 select-none">
                            EDU
                        </div>

                        <div className="absolute -right-24 -bottom-24 w-[320px] h-[320px] bg-blue-500/20 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-3xl bg-blue-500/20 text-blue-300 flex items-center justify-center text-3xl border border-blue-300/20">
                                <FaGraduationCap />
                            </div>

                            <p className="text-blue-300 font-semibold mt-8">
                                ACADEMIC PROFILE
                            </p>

                            <h3 className="text-5xl font-black mt-4 leading-tight">
                                Engineering
                                <br />
                                meets AI.
                            </h3>

                            <p className="mt-6 text-slate-300 leading-8">
                                Built a strong foundation in engineering, intelligent systems,
                                data analytics, and computer vision through undergraduate
                                and postgraduate studies.
                            </p>

                            <div className="grid grid-cols-2 gap-5 mt-10">
                                {[
                                    ["3.91", "Master GPA"],
                                    ["3.77", "Bachelor GPA"],
                                ].map(([value, label]) => (
                                    <div
                                        key={label}
                                        className="
                                            bg-white/10
                                            rounded-3xl
                                            p-5
                                            border
                                            border-white/10
                                            hover:bg-white/15
                                            hover:-translate-y-2
                                            transition-all
                                            duration-300
                                        "
                                    >
                                        <h4 className="text-4xl font-black text-blue-300">
                                            {value}
                                        </h4>

                                        <p className="text-slate-300 mt-2">
                                            {label}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 grid grid-cols-3 gap-3">
                                {[
                                    { icon: <FaBrain />, label: "AI" },
                                    { icon: <FaLaptopCode />, label: "CV" },
                                    { icon: <FaAward />, label: "Cum Laude" },
                                ].map((item) => (
                                    <div
                                        key={item.label}
                                        className="
                                            bg-white/10
                                            rounded-2xl
                                            p-4
                                            text-center
                                            border
                                            border-white/10
                                            hover:bg-blue-500/20
                                            transition-all
                                        "
                                    >
                                        <div className="text-blue-300 mx-auto flex justify-center">
                                            {item.icon}
                                        </div>

                                        <p className="text-xs text-slate-300 mt-2">
                                            {item.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 to-slate-200 dark:to-slate-700" />

                        {educations.map((edu) => (
                            <div
                                key={edu.degree}
                                className="relative pl-16 pb-16 last:pb-0"
                            >
                                <div
                                    className={`
                                        absolute
                                        left-0
                                        w-10
                                        h-10
                                        rounded-full
                                        border-4
                                        border-white
                                        dark:border-slate-950
                                        shadow-lg
                                        ${edu.color === "blue" ? "bg-blue-600" : "bg-indigo-600"}
                                    `}
                                />

                                <div
                                    className="
                                        group
                                        bg-white
                                        rounded-[34px]
                                        p-8
                                        border
                                        border-slate-100
                                        shadow-sm
                                        hover:-translate-y-2
                                        hover:shadow-2xl
                                        transition-all
                                        duration-300
                                        dark:bg-slate-900/80
                                        dark:border-slate-700
                                        dark:hover:border-blue-500/40
                                    "
                                >
                                    <p
                                        className={`
                                            font-semibold
                                            ${edu.color === "blue" ? "text-blue-600 dark:text-blue-400" : "text-indigo-600 dark:text-indigo-400"}
                                        `}
                                    >
                                        {edu.period}
                                    </p>

                                    <h3 className="text-3xl font-black mt-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                                        {edu.degree}
                                    </h3>

                                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                                        {edu.school}
                                    </p>

                                    <p className="mt-5 text-slate-600 dark:text-slate-300 leading-8">
                                        {edu.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-3 mt-6">
                                        {edu.tags.map((item) => (
                                            <span
                                                key={item}
                                                className="
                                                    px-4
                                                    py-2
                                                    bg-blue-50
                                                    text-blue-700
                                                    rounded-full
                                                    text-sm
                                                    font-medium
                                                    dark:bg-blue-500/10
                                                    dark:text-blue-300
                                                "
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}