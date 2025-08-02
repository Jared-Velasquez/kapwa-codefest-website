"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "react-oidc-context";

function DesktopNav() {
  const auth = useAuth();
  
  return (
    <div className="hidden fixed top-0 right-0 left-0 z-100 md:block">
      <nav className="bg-white w-[90vw] p-[1.5vh_1vw] rounded-[30px] my-[4vh] mx-auto shadow-md scroll-smooth">
        <ul className="flex flex-row justify-around">
          <li className="text-black font-sans">
            <Link href="/#LandingPage">Home</Link>
          </li>
          <li className="text-black font-sans">
            <Link href="/#About">About</Link>
          </li>
          <li className="text-black font-sans">
            <Link href="/#Schools">Schools</Link>
          </li>
          <li className="text-black font-sans">
            <Link href="/#FAQ">FAQ</Link>
          </li>
          <li className="text-black font-sans ">
            <Link href="/#Prizes">Prizes</Link>
          </li>
          <li className="text-black font-sans">
            <Link href="/#Rules">Rules</Link>
          </li>
          <li className="text-black font-sans">
            <Link href="/#Itinerary">Itinerary</Link>
          </li>
          <li className="text-black font-sans">
            <Link href="/#Team">Team</Link>
          </li>
          {auth.isAuthenticated ? (
            <li className="text-black font-sans">
              <Link href="/profile">Profile</Link>
            </li>
          ) : (
            <li className="text-black font-sans">
              <Link href="/#SignUp">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const auth = useAuth();

  return (
    <>
      <div
        className={`flex items-center justify-center absolute w-full bg-white z-99 top-0 left-0 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "h-dvh opacity-100" : "h-0 opacity-0"
        }`}
      >
        <nav>
          <ul className="flex flex-col gap-5 text-center">
            <li className="text-black font-sans">
              <Link href="/#LandingPage" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="text-black font-sans">
              <Link href="/#About" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li className="text-black font-sans">
              <Link href="/#Schools" onClick={() => setIsOpen(false)}>
                Schools
              </Link>
            </li>
            <li className="text-black font-sans">
              <Link href="/#FAQ" onClick={() => setIsOpen(false)}>
                FAQ
              </Link>
            </li>
            <li className="text-black font-sans">
              <Link href="/#Prizes" onClick={() => setIsOpen(false)}>
                Prizes
              </Link>
            </li>
            <li className="text-black font-sans">
              <Link href="/#Rules" onClick={() => setIsOpen(false)}>
                Rules
              </Link>
            </li>
            <li className="text-black font-sans">
              <Link href="/#Itinerary" onClick={() => setIsOpen(false)}>
                Itinerary
              </Link>
            </li>
            <li className="text-black font-sans">
              <Link href="/#Team" onClick={() => setIsOpen(false)}>
                Team
              </Link>
            </li>
            {auth.isAuthenticated ? (
              <li className="text-black font-sans">
                <Link href="/profile" onClick={() => setIsOpen(false)}>
                  Profile
                </Link>
              </li>
            ) : (
              <li className="text-black font-sans">
                <Link href="/#SignUp" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <div className="flex pt-5 px-5 justify-end w-full fixed z-100 md:hidden">
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

export default function Navbar() {
  return (
    <div className="relative">
      <DesktopNav />
      <MobileNav />
    </div>
  );
}
