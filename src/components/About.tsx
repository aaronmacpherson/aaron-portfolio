export default function About() {
    return (
        <>
            <section id="about" className="flex flex-col items-center my-10 gap-4 scroll-m-14">
                <div>
                    <h2 className="flex flex-col items-center text-4xl font-bold after:border-b-8 after:rounded-sm after:w-44 after:block after:border-accent after:relative after:bottom-4 after:z-[-1]">About</h2>
                </div>
                <div className="flex flex-col w-3/4 items-center justify-center">
                    <img className="w-32 h-32 rounded-full mb-4 text-mainText" src="./images/about-image.jpg" alt="picture of aaron macpherson" />
                    <p className="w-4/5">
                        I am currently a second year IT Web Programming student at the Nova Scotia Community College Truro campus. My goal during this program is to graduate in 2025 with a robust skill-set that will enable me to pursue a career in computer programming or full-stack web development. Before entering my current program, I also gained valuable IT skills while taking the Computer Programmer/Analyst course at Conestoga College. My time there helped me secure a 1 year co-op placement at Manulife Financial where I was able to utilize my programming skills to gain real world experience in the web development field.
                    </p>
                </div>
            </section>
        </>
    )
}