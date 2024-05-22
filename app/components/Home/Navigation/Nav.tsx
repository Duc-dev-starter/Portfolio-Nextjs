
import Link from 'next/link'
import React from 'react'
import { FaBars } from 'react-icons/fa'

// props type
type Props = {
    openNav: () => void
}

const Nav = ({ openNav }: Props) => {
    const goToGitHub = () => {
        window.location.href = 'https://github.com/Duc-dev-starter';
    }

    return (
        <div className="h-[12vh] bg-customWhite shadow-md">
            <div className="w-[85%] flex items-center justify-between mx-auto h-[12vh]">
                {/* Logo */}
                <h1 className="text-[16px] md:text-[25px] font-bold text-black">
                    <span className="text-[27px] md:text-[40px] text-yellow-300">Port</span>
                    folio
                </h1>
                {/* Nav */}
                <ul className="hidden lg:flex items-center space-x-10">
                    <li className="text-[17px] font-semibold transition-all duration-200 cursor-pointer text-yellow-300">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="text-[17px] font-semibold transition-all duration-200 cursor-pointer text-black hover:text-yellow-400">
                        <Link href="#about">About</Link>
                    </li>
                    <li className="text-[17px] font-semibold transition-all duration-200 cursor-pointer text-black hover:text-yellow-400">
                        <Link href="#language">Programming Language</Link>
                    </li>
                    <li className="text-[17px] font-semibold transition-all duration-200 cursor-pointer text-black hover:text-yellow-400">
                        <Link href="#projects">Projects</Link>
                    </li>
                </ul>
                <div className="flex items-center space-x-4">
                    {/* Login button */}
                    <button
                        className="rounded px-10 py-2.5 overflow-hidden group bg-yellow-500 hover:bg-gradient-to-r
                        hover:from-yellow-500 hover:to-yellow-400 relative text-black hover:ring-2 hover:ring-offset-2
                        transition-all ease-out duration-300">
                        <span className="absolute right-0 w-8 h-32 -mt-12 translate-all duration-1000 transform
                        translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease-out"></span>
                        <span className="relative" onClick={goToGitHub}>Go to Github</span>
                    </button>
                    {/* burger menu */}
                    <FaBars onClick={openNav} className="w-8 h-8 text-white cursor-pointer lg:hidden" />
                </div>
            </div>
        </div>
    )
}

export default Nav