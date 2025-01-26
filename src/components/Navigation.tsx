"use client";

import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="flex fixed w-screen items-center justify-center bg-white/90 text-mainText text-xs lg:text-base">
            <ul className="flex flex-wrap">
                <li>
                    <Link className="flex items-center justify-center md:w-full p-3 text-subText hover:text-black text-xl font-thin" href="#home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="flex items-center justify-center md:w-full p-3 text-subText hover:text-black text-xl font-thin" href="#about">
                        About
                    </Link>
                </li>
                <li>
                    <Link className="flex items-center justify-center md:w-full p-3 text-subText hover:text-black text-xl font-thin" href="#skills">
                        Skills
                    </Link>
                </li>
                <li>
                    <Link className="flex items-center justify-center md:w-full p-3 text-subText hover:text-black text-xl font-thin" href="#projects">
                        Projects
                    </Link>
                </li>
            </ul>
        </nav>
    )
}