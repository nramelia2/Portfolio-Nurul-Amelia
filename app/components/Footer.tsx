import {
    FaLinkedin,
    FaGithub,
    FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            className="
                relative
                overflow-hidden
                bg-slate-950
                text-white
                border-t
                border-white/10
                dark:bg-black
            "
        >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 py-14 relative z-10">

                <div
                    className="
                        flex
                        flex-col
                        lg:flex-row
                        justify-between
                        items-start
                        lg:items-center
                        gap-10
                    "
                >

                    {/* LEFT */}

                    <div>
                        <div className="flex items-center gap-4">

                            <div
                                className="
                                    w-14
                                    h-14
                                    rounded-2xl
                                    bg-gradient-to-br
                                    from-blue-600
                                    to-indigo-600
                                    flex
                                    items-center
                                    justify-center
                                    font-black
                                    text-xl
                                    shadow-lg
                                "
                            >
                                NA
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold">
                                    Nurul Amelia
                                </h3>

                                <p className="text-slate-400">
                                    Data Engineer • Data Analyst
                                </p>
                            </div>

                        </div>

                        <div
                            className="
                                inline-flex
                                items-center
                                gap-2
                                mt-5
                                text-sm
                                text-green-400
                            "
                        >
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                            Available for opportunities
                        </div>
                    </div>

                    {/* RIGHT */}

                    <div className="flex gap-4">

                        <a
                            href="https://linkedin.com/in/nramelia2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                w-12
                                h-12
                                rounded-full
                                bg-white/5
                                border
                                border-white/10
                                flex
                                items-center
                                justify-center
                                text-xl
                                hover:bg-blue-600
                                hover:border-blue-600
                                hover:-translate-y-1
                                transition-all
                                duration-300
                            "
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://github.com/nramelia2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                w-12
                                h-12
                                rounded-full
                                bg-white/5
                                border
                                border-white/10
                                flex
                                items-center
                                justify-center
                                text-xl
                                hover:bg-blue-600
                                hover:border-blue-600
                                hover:-translate-y-1
                                transition-all
                                duration-300
                            "
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="mailto:na.nurulamelia@gmail.com"
                            className="
                                w-12
                                h-12
                                rounded-full
                                bg-white/5
                                border
                                border-white/10
                                flex
                                items-center
                                justify-center
                                text-xl
                                hover:bg-blue-600
                                hover:border-blue-600
                                hover:-translate-y-1
                                transition-all
                                duration-300
                            "
                        >
                            <FaEnvelope />
                        </a>

                    </div>
                </div>

                <div
                    className="
                        mt-10
                        pt-8
                        border-t
                        border-white/10
                        flex
                        flex-col
                        md:flex-row
                        justify-between
                        items-center
                        gap-4
                    "
                >
                    <p className="text-slate-500 text-sm">
                        © 2026 Nurul Amelia. All rights reserved.
                    </p>

                    <p className="text-slate-500 text-sm">
                        Built with Next.js & Tailwind CSS
                    </p>
                </div>

            </div>
        </footer>
    );
}