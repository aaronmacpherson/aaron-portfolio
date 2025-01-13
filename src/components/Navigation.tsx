export default function Navigation() {
    return (
        <nav className="flex fixed w-screen items-center justify-center bg-white/90 text-mainText text-xs lg:text-base">
            <ul className="flex flex-wrap">
                <li>
                    <a className="flex items-center justify-center md:w-full p-4 text-subText hover:text-black" href="#">
                        Home
                    </a>
                </li>
                <li>
                    <a className="flex items-center justify-center md:w-full p-4 text-subText hover:text-black" href="#about">
                        About
                    </a>
                </li>
                <li>
                    <a className="flex items-center justify-center md:w-full p-4 text-subText hover:text-black" href="#skills">
                        Skills
                    </a>
                </li>
                <li>
                    <a className="flex items-center justify-center md:w-full p-4 text-subText hover:text-black" href="#web-projects">
                        Web Projects
                    </a>
                </li>
                <li>
                    <a className="flex items-center justify-center md:w-full p-4 text-subText hover:text-black" href="#other-projects">
                        Other Projects
                    </a>
                </li>
            </ul>
        </nav>
    )
}