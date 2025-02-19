export default function Footer() {
    return (
        <>
            <footer className="flex flex-col sm:flex-row bg-white sm:justify-between items-center h-[150px] px-10">
                <div className="sm:flex w-[50px] h-[60px] hidden invisible"></div>
                <div className="flex flex-col items-center mt-4 sm:mt-0">
                    <p className="text-subText text-sm">Aaron MacPherson &#169;2024</p>
                </div>
                <a className="flex items-center justify-center mt-4 sm:mt-0 w-[40px] h-[50px] sm:w-[50px] sm:h-[60px] bg-accent rounded hover:bg-accent/90" href="#">
                    <i className="fa-solid fa-chevron-up text-2xl font-bold"></i>
                </a>
            </footer>
        </>
    )
}