"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "react-oidc-context";

const sections = [
    { id: "LandingPage", label: "Home" },
    { id: "About", label: "About" },
    { id: "Schools", label: "Schools" },
    { id: "FAQ", label: "FAQ" },
    { id: "Prizes", label: "Prizes" },
    { id: "Rules", label: "Rules" },
    { id: "Itinerary", label: "Itinerary" },
    { id: "Team", label: "Team" },
];

export default function Navbar() {
    const auth = useAuth();
    const [activeSection, setActiveSection] = useState("LandingPage");
    const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });
    const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const navContainerRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;
                        setActiveSection(sectionId);
                        window.history.replaceState(null, "", `#${sectionId}`);
                    }
                });
            },
            { threshold: 0.1 }
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const activeIndex = sections.findIndex((s) => s.id === activeSection);
        const activeEl = navRefs.current[activeIndex];
        const containerRect = navContainerRef.current?.getBoundingClientRect();

        if (activeEl && containerRect) {
            const { left, width } = activeEl.getBoundingClientRect();
            setHighlightStyle({
                left: left - containerRect.left,
                width,
            });
        }
    }, [activeSection]);

    return (
        <div className="relative">
            {/* Desktop Nav */}
            <div className="hidden fixed top-0 right-0 left-0 z-100 md:block">
                <nav className="bg-white w-[90vw] p-[1.5vh_1vw] rounded-[30px] my-[4vh] mx-auto shadow-md scroll-smooth">
                    <ul
                        ref={navContainerRef}
                        className="flex flex-row justify-around relative"
                    >
                        <div
                            className="absolute top-1/2 -translate-y-1/2 h-[70%] bg-[#EDAB1D] rounded-[40px] transition-all duration-300 ease-in-out"
                            style={{
                                left: `${highlightStyle.left}px`,
                                width: `${highlightStyle.width}px`,
                            }}
                        />

                        {sections.map((section, i) => (
                            <li key={section.id} className="relative z-10">
                                <Link
                                    ref={(el) => (navRefs.current[i] = el)}
                                    href={`/#${section.id}`}
                                    className="font-sans px-[2vw] py-[1.5vh] rounded-[40px] text-black text-center text-lg block"
                                >
                                    {section.label}
                                </Link>
                            </li>
                        ))}

                        {auth.isAuthenticated ? (
                            <li className="relative z-10">
                                <Link
                                    href="/profile"
                                    className="text-black font-sans px-[2vw] py-[1.5vh] rounded-[40px] block text-center text-lg"
                                >
                                    Profile
                                </Link>
                            </li>
                        ) : (
                            <li className="relative z-10">
                                <div
                                    onClick={() => auth.signinRedirect()}
                                    className="cursor-pointer text-black font-sans px-[2vw] py-[1.5vh] rounded-[40px] block text-center text-lg"
                                >
                                    Login
                                </div>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>

            {/* Mobile Nav */}
            <MobileNav auth={auth} activeSection={activeSection} />
        </div>
    );
}

function MobileNav({ auth, activeSection }: { auth: any; activeSection: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className={`flex items-center justify-center fixed w-full h-dvh bg-white z-[99] top-0 left-0 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            >
                <nav>
                    <ul className="flex flex-col gap-5 text-center">
                        {sections.map((section) => (
                            <li key={section.id}>
                                <Link
                                    href={`/#${section.id}`}
                                    onClick={() => setIsOpen(false)}
                                    className={`font-sans ${
                                        activeSection === section.id
                                            ? "text-black font-bold bg-[#EDAB1D] rounded-[40px] px-[2vw] py-[1vh]"
                                            : "text-black"
                                    }`}
                                >
                                    {section.label}
                                </Link>
                            </li>
                        ))}
                        {auth.isAuthenticated ? (
                            <li>
                                <Link
                                    href="/profile"
                                    onClick={() => setIsOpen(false)}
                                    className="text-black font-sans"
                                >
                                    Profile
                                </Link>
                            </li>
                        ) : (
                            <li
                                onClick={() => auth.signinRedirect()}
                                className="cursor-pointer text-black font-sans"
                            >
                                Login
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
            <div className="flex pt-5 px-5 justify-end w-full fixed z-[100] md:hidden">
                <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`size-8 ${isOpen ? "rotate-90" : ""} transition duration-300`}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>
            </div>
        </>
    );
}
