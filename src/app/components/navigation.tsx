"use client"

import Link from "next/link"

export default function Navigation() {
    return (
        <div className="fixed top-0 right-0 left-0 z-100">
            <nav className="bg-white w-[90vw] p-[1.5vh_1vw] rounded-[30px] my-[4vh] mx-auto shadow-md scroll-smooth">
                <ul className="flex flex-row justify-around">
                    <li className="text-black font-sans">
                        <Link href="#LandingPage">Home</Link>
                    </li>
                    <li className="text-black font-sans">
                        <Link href="#About">About</Link>
                    </li>
                    <li className="text-black font-sans">
                        <Link href="#Schools">Schools</Link>
                    </li>
                    <li className="text-black font-sans">
                        <Link href="#FAQ">FAQ</Link>
                    </li>
                    <li className="text-black font-sans ">
                        <Link href="#Prizes">Prizes</Link>
                    </li>
                    <li className="text-black font-sans">
                        <Link href="#Rules">Rules</Link>
                    </li>
                    <li className="text-black font-sans">
                        <Link href="#Itinerary">Itinerary</Link>
                    </li>
                    <li className="text-black font-sans">
                        <Link href="#Team">Team</Link>
                    </li>
                    <li className="text-black font-sans">
                        <Link href="#SignUp">Sign-Up</Link>
                    </li>
                </ul>
            </nav>
        </div>

    )
}
