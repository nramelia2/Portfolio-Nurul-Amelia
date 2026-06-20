export default function Education() {
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
            "
        >
            <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center">
                    <p className="text-blue-600 font-semibold">
                        EDUCATION
                    </p>

                    <h2 className="text-5xl font-bold mt-3">
                        Academic Journey
                    </h2>

                    <p className="mt-5 text-slate-500 max-w-2xl mx-auto leading-8">
                        Academic background in Electrical Engineering, Computer Engineering,
                        Artificial Intelligence, and Computer Vision research.
                    </p>
                </div>

                <div className="mt-20 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">

                    <div
                        className="
                            bg-slate-900
                            text-white
                            rounded-[40px]
                            p-10
                            relative
                            overflow-hidden
                            shadow-2xl
                        "
                    >
                        <div className="absolute right-6 top-0 text-[130px] font-black text-white/5">
                            EDU
                        </div>

                        <p className="text-blue-300 font-semibold">
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
                            <div className="bg-white/10 rounded-3xl p-5">
                                <h4 className="text-4xl font-black text-blue-300">
                                    3.91
                                </h4>
                                <p className="text-slate-300 mt-2">
                                    Master GPA
                                </p>
                            </div>

                            <div className="bg-white/10 rounded-3xl p-5">
                                <h4 className="text-4xl font-black text-blue-300">
                                    3.77
                                </h4>
                                <p className="text-slate-300 mt-2">
                                    Bachelor GPA
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 to-slate-200" />

                        <div className="relative pl-16 pb-16">
                            <div className="absolute left-0 w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-lg" />

                            <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all">
                                <p className="text-blue-600 font-semibold">
                                    Aug 2023 - Jan 2025
                                </p>

                                <h3 className="text-3xl font-bold mt-3">
                                    Master of Electrical Engineering
                                </h3>

                                <p className="text-slate-500 mt-1">
                                    Telkom University
                                </p>

                                <p className="mt-5 text-slate-600 leading-8">
                                    Focused on Control and Intelligent Systems,
                                    Computer Vision, and Artificial Intelligence.
                                    Completed thesis research on EXYOLOv8 for
                                    enhanced small object detection in remote sensing imagery.
                                </p>

                                <div className="flex flex-wrap gap-3 mt-6">
                                    {[
                                        "Cum Laude",
                                        "GPA 3.91/4.00",
                                        "Computer Vision",
                                        "Artificial Intelligence",
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative pl-16">
                            <div className="absolute left-0 w-10 h-10 rounded-full bg-indigo-600 border-4 border-white shadow-lg" />

                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-[32px] p-8 border border-indigo-100 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all">
                                <p className="text-indigo-600 font-semibold">
                                    Aug 2019 - Aug 2023
                                </p>

                                <h3 className="text-3xl font-bold mt-3">
                                    Bachelor of Computer Engineering
                                </h3>

                                <p className="text-slate-500 mt-1">
                                    Telkom University
                                </p>

                                <p className="mt-5 text-slate-600 leading-8">
                                    Developed a strong foundation in computing,
                                    software development, embedded systems, and
                                    intelligent applications. Completed a capstone project
                                    on Sign Language Translator using Deep Learning.
                                </p>

                                <div className="flex flex-wrap gap-3 mt-6">
                                    {[
                                        "Cum Laude",
                                        "GPA 3.77/4.00",
                                        "Deep Learning",
                                        "Computer Engineering",
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            className="px-4 py-2 bg-white text-indigo-700 rounded-full text-sm"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}