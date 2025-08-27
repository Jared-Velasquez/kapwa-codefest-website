"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "react-oidc-context";
import Image from "next/image";

type RouteType = 'hash' | 'page'

type Route = {
    label: string
    path: string
    type: RouteType
}

const sections = [
    { id: "About", label: "#About", type: "hash" },
    { id: "Schools", label: "#Schools", type: "hash" },
    { id: "FAQ", label: "#FAQ", type: "hash" },
    { id: "Prizes", label: "#Prizes", type: "hash" },
    { id: "Rules", label: "#Rules", type: "hash" },
    { id: "Itinerary", label: "#Itinerary", type: "hash" },
    { id: "Team", label: "#Team", type: "hash" },
];

export default function Navbar() {
    const auth = useAuth();
    const [currentHash, setCurrentHash] = useState('')
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState("LandingPage");
    const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });
    const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const navContainerRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        const updateHash = () => {
            setCurrentHash(window.location.hash)
        }

        updateHash()
        window.addEventListener('hashchange', updateHash)

        return () => window.removeEventListener('hashchange', updateHash)
    }, [])

    const handleHashClick = (e: React.MouseEvent, path: string) => {
        e.preventDefault();

        if (window.location.pathname !== "/") {
            window.location.href = `/${path}`;
            return;
        }

        const element = document.getElementById(path.replace("#", ""));
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", path);
            setCurrentHash(path);
        }
    };

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     const sectionId = entry.target.id;
    //                     setActiveSection(sectionId);
    //                     window.history.replaceState(null, "", `#${sectionId}`);
    //                 }
    //             });
    //         },
    //         { threshold: 0.1 }
    //     );
    //
    //     sections.forEach((section) => {
    //         const el = document.getElementById(section.id);
    //         if (el) observer.observe(el);
    //     });
    //
    //     return () => observer.disconnect();
    // }, []);
    //
    // useEffect(() => {
    //     const activeIndex = sections.findIndex((s) => s.id === activeSection);
    //     const activeEl = navRefs.current[activeIndex];
    //     const containerRect = navContainerRef.current?.getBoundingClientRect();
    //
    //     if (activeEl && containerRect) {
    //         const { left, width } = activeEl.getBoundingClientRect();
    //         setHighlightStyle({
    //             left: left - containerRect.left,
    //             width,
    //         });
    //     }
    // }, [activeSection]);
=======
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         const sectionId = entry.target.id;
//                         setActiveSection(sectionId);
//                         window.history.replaceState(null, "", `#${sectionId}`);
//                     }
//                 });
//             },
//             { threshold: 0.1 }
//         );


//         const observed: Element[] = [];
//         sections.forEach((section) => {
//             const el = document.getElementById(section.id);
//             if (el) {
//                 observer.observe(el);
//                 observed.push(el);
//             }
//         });

//         return () => {
//             observed.forEach((el) => observer.unobserve(el));
//             observer.disconnect();
//         };
//     }, [pathname]);

//     // useEffect(() => {
//     //     const activeIndex = sections.findIndex((s) => s.id === activeSection);
//     //     const activeEl = navRefs.current[activeIndex];
//     //     const containerRect = navContainerRef.current?.getBoundingClientRect();

//     //     if (activeEl && containerRect) {
//     //         const { left, width } = activeEl.getBoundingClientRect();
//     //         setHighlightStyle({
//     //             left: left - containerRect.left,
//     //             width,
//     //         });
//     //     }
//     // }, [activeSection]);

//     useEffect(() => {
//         const update = () => {
//             const activeIndex = sections.findIndex((s) => s.id === activeSection);
//             const activeEl = navRefs.current[activeIndex];
//             const containerRect = navContainerRef.current?.getBoundingClientRect();

//             if (activeEl && containerRect) {
//                 const { left, width } = activeEl.getBoundingClientRect();
//                 setHighlightStyle({
//                     left: left - containerRect.left,
//                     width,
//                 });
//             }
//         }

//         update();
//         window.addEventListener("resize", update);
//         return () => window.removeEventListener("resize", update);
//     }, [activeSection, auth.isAuthenticated, pathname]);
// >>>>>>> main

    return (
        <div className="relative z-100">
            {/* Desktop Nav */}
            <div className="hidden fixed top-0 right-0 left-0  md:block">
                <nav className="bg-white w-[90vw] p-[1.5vh_1vw] rounded-[30px] my-[4vh] mx-auto shadow-md scroll-smooth">
                    <ul
                        ref={navContainerRef}
                        className="flex flex-row justify-around relative items-center"
                    >
                        <li className="relative z-10">
                            <a className="mouse" href="/" onClick={(e:any) => handleHashClick(e, "#LandingPage")}>
                                <Image src="/Logo.svg" alt={"Home"} height={100} width={60} />
                            </a>
                        </li>
                        {sections.map((section, i) => (
                            <li key={section.id} className="relative z-10">
                                <a
                                    onClick={(e:any) => handleHashClick(e, section.label)}
                                    href={`/#${section.id}`}
                                    className="font-sans px-[2vw] py-[1.5vh] rounded-[40px] text-black text-center text-lg block"
                                >
                                    {section.id}
                                </a>
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
                    <ul className="flex flex-col gap-[4vh] text-center text-2xl sm:text-3xl">
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
                                    {section.id}
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
