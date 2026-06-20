import {
    FaLinkedin,
    FaGithub,
    FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            className="
                py-12
                bg-slate-950
                text-white
                border-t
                border-white/10
            "
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="
                    flex
                    flex-col
                    md:flex-row
                    justify-between
                    items-center
                    gap-6
                ">
                    <div>
                        <h3 className="text-2xl font-bold">
                            Nurul <span className="text-blue-400">Amelia</span>
                        </h3>

                        <p className="text-slate-400 mt-2">
                            Data Engineer • Data Analyst • AI Research Enthusiast
                        </p>
                    </div>

                    <div className="flex gap-4 text-xl">
                        <a
                            href="https://linkedin.com/in/nramelia2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://github.com/nramelia2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="mailto:na.nurulamelia@gmail.com"
                            className="hover:text-blue-400 transition"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/10 text-center text-slate-500 text-sm">
                    © 2026 Nurul Amelia. Built with Next.js & Tailwind CSS.
                </div>
            </div>
        </footer>
    );
}