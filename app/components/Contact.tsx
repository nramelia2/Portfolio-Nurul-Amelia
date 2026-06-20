import {
    FaLinkedin,
    FaGithub,
    FaEnvelope,
    FaDownload,
} from "react-icons/fa";

export default function Contact() {
    return (
        <section
            id="contact"
            className="
                py-32
                relative
                overflow-hidden
                bg-gradient-to-br
                from-slate-900
                via-blue-900
                to-indigo-900
                text-white
            "
        >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/20 blur-3xl rounded-full" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <p className="text-blue-300 font-semibold">
                    CONTACT
                </p>

                <h2 className="text-5xl lg:text-6xl font-black mt-4">
                    Let&apos;s Build Something
                    <br />
                    Meaningful Together
                </h2>

                <p className="mt-6 text-blue-100 max-w-2xl mx-auto leading-8">
                    Open to Data Engineer, Data Analyst, Analytics Engineer, Machine Learning Engineer, Artificial Intelligence Engineer, and BI-related opportunities.
                </p>

                <div className="flex flex-wrap justify-center gap-5 mt-12">
                    <a
                        href="mailto:na.nurulamelia@gmail.com"
                        className="bg-white text-blue-600 px-7 py-4 rounded-2xl font-semibold hover:-translate-y-1 hover:shadow-xl transition-all flex items-center gap-3"
                    >
                        <FaEnvelope />
                        Email Me
                    </a>

                    <a
                        href="https://linkedin.com/in/nramelia2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 border border-white/20 px-7 py-4 rounded-2xl font-semibold hover:-translate-y-1 hover:bg-white/20 transition-all flex items-center gap-3"
                    >
                        <FaLinkedin />
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/nramelia2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 border border-white/20 px-7 py-4 rounded-2xl font-semibold hover:-translate-y-1 hover:bg-white/20 transition-all flex items-center gap-3"
                    >
                        <FaGithub />
                        GitHub
                    </a>

                    <a
                        href="https://drive.google.com/drive/folders/1BeWGWyjwa1zBqEeKp5DQp6qtYdztBXG2?usp=sharing"
                        className="bg-white/10 border border-white/20 px-7 py-4 rounded-2xl font-semibold hover:-translate-y-1 hover:bg-white/20 transition-all flex items-center gap-3"
                    >
                        <FaDownload />
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    );
}