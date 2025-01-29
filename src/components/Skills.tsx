export default function Skills() {
    return (
        <>
            <section id="skills" className="flex flex-col items-center my-10 gap-4 scroll-m-14">
                <div>
                    <h2 className="flex flex-col items-center text-4xl font-bold after:border-b-8 after:rounded-sm after:w-44 after:block after:border-accent after:relative after:bottom-4 after:z-[-1]">Skills</h2>
                </div>
                <div className="flex flex-col lg:flex-row w-3/4 items-center justify-center text-nowrap gap-2">
                    <div className="flex flex-col p-20 w-3/4 items-center justify-center rounded border border-subBackgroundBorder">
                        <div><i className="fas fa-solid fa-display text-4xl"></i></div>
                        <div className="text-2xl">Web Development</div>
                        <div className="text-mainText">HTML, CSS, JavaScript, Next.js, ASP.NET</div>
                    </div>
                    <div className="flex flex-col p-20 w-3/4 items-center justify-center rounded border border-subBackgroundBorder">
                        <div><i className="fas fa-solid fa-code text-4xl"></i></div>
                        <div className="text-2xl">Application Development</div>
                        <div className="text-mainText">C#, Java, Python</div>
                    </div>
                    <div className="flex flex-col p-20 w-3/4 items-center justify-center rounded border border-subBackgroundBorder">
                        <div><i className="fas fa-solid fa-database text-4xl"></i></div>
                        <div className="text-2xl">Database Development</div>
                        <div className="text-mainText">MySQL, MongoDB, Postgres</div>
                    </div>
                </div>
            </section>
        </>
    )
}