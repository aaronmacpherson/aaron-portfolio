"use client"

export default function Home() {
    return (
        <>
        <section id="home">
            <div className="flex flex-col absolute justify-center items-center px-10 h-[629px] w-screen bg-center bg-cover bg-no-repeat bg-black/50">
                <p className="text-white text-base sm:text-2xl md:text-4xl md:w-3/4 font-bold">
                    Hi&#44; I&#39;m <span className="text-accent">Aaron</span>. I&#39;m an aspiring full-stack web developer located in Nova Scotia. I&#39;m currently pursuing any opportunities that will put my development skills to the test.
                </p>
                <div className="flex gap-2 mt-5 md:mt-12">
                    <a className="flex flex-nowrap gap-1 text-xs items-center sm:text-base md:text-2xl p-4 bg-black text-white border border-black hover:border-white rounded" href="https://www.linkedin.com/in/a-macpherson/" target="_blank">
                        LinkedIn <img className="inline h-[15px] sm:h-[21px]" src="/images/linkedIn.png" alt="LinkedIn logo" />
                    </a>
                    <a className="flex flex-nowrap gap-1 text-xs items-center sm:text-base md:text-2xl p-4 bg-white text-black rounded border border-white hover:border-black" href="https://github.com/aaronmacpherson" target="_blank">
                        GitHub <img className="inline h-[15px] sm:h-[21px]" src="/images/github-mark.png" alt="GitHub logo" />
                    </a>
                </div>
            </div>
            {/* home image */}
            <div className="flex px-10 h-[629px] bg-center bg-cover bg-no-repeat bg-homeImage"></div>
        </section>
        </>
    )
}