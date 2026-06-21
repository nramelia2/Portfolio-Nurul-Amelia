export default function FinalCTA() {
    return (
        <section
            className="
                py-28
                relative
                overflow-hidden
                bg-white
                dark:bg-slate-950
            "
        >
            <div className="max-w-7xl mx-auto px-6">
                <div
                    className="
                        group
                        relative
                        overflow-hidden
                        rounded-[44px]
                        bg-gradient-to-br
                        from-blue-600
                        via-indigo-600
                        to-purple-700
                        text-white
                        p-12
                        lg:p-16
                        text-center
                        shadow-2xl
                        hover:-translate-y-2
                        hover:shadow-blue-300/40
                        transition-all
                        duration-500
                        dark:from-blue-700
                        dark:via-indigo-800
                        dark:to-slate-900
                        dark:border
                        dark:border-blue-500/20
                    "
                >
                    <div className="absolute right-10 top-0 text-[140px] font-black text-white/10 select-none">
                        LET&apos;S
                    </div>

                    <div className="absolute -left-24 -bottom-24 w-80 h-80 bg-white/20 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition" />

                    <div className="relative z-10">
                        <p className="text-blue-100 font-semibold tracking-[0.2em]">
                            OPEN TO OPPORTUNITIES
                        </p>

                        <h2 className="text-5xl lg:text-6xl font-black mt-5 leading-tight">
                            Interested in working
                            <br />
                            together?
                        </h2>

                        <p className="mt-6 text-blue-100 max-w-2xl mx-auto leading-8">
                            Let&apos;s connect for Data Engineer, Data Analyst,
                            BI, or Analytics Engineering opportunities.
                        </p>

                        <a
                            href="#contact"
                            className="
                                inline-flex
                                items-center
                                gap-3
                                mt-10
                                bg-white
                                text-blue-600
                                px-8
                                py-4
                                rounded-2xl
                                font-bold
                                hover:bg-blue-50
                                hover:-translate-y-1
                                hover:shadow-xl
                                transition-all
                            "
                        >
                            Contact Me →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}