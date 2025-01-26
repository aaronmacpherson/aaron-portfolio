export default function Skills() {
    return (
        <>
            <section id="skills" className="flex flex-col items-center my-10 gap-4 scroll-m-14">
                <div>
                    <h2 className="flex flex-col items-center text-4xl font-bold after:border-b-8 after:rounded-sm after:w-44 after:block after:border-accent after:relative after:bottom-4 after:z-[-1]">Skills</h2>
                </div>
                <div className="flex flex-col lg:flex-row w-3/4 items-center justify-center text-nowrap gap-2">
                    <div className="flex flex-col basis-1/2 p-20 w-3/4 items-center justify-center rounded border border-subBackgroundBorder">
                        <div><i className="fas fa-solid fa-display text-4xl"></i></div>
                        <div className="text-2xl">Front-End</div>
                        <div className="text-mainText">HTML, CSS, JavaScript, Next.js</div>
                    </div>
                    <div className="flex flex-col mt-5 lg:m-0 basis-1/2 p-20 w-3/4 items-center justify-center rounded border border-subBackgroundBorder">
                        <div><i className="fas fa-solid fa-server text-4xl"></i></div>
                        <div className="text-2xl">Back-End</div>
                        <div className="text-mainText">C#, Java, Node.js</div>
                    </div>
                    <div className="flex flex-col mt-5 lg:m-0 basis-1/2 p-20 w-3/4 items-center justify-center rounded border border-subBackgroundBorder">
                        <div><i className="fas fa-solid fa-database text-4xl"></i></div>
                        <div className="text-2xl">Database</div>
                        <div className="text-mainText">MySQL, MongoDB, Postgres</div>
                    </div>
                </div>
            </section>
        </>
    )
}