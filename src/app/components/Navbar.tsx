"use client";

import Link from "next/link";
import { useState, useEffect, useMemo, useRef } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "react-oidc-context";

const sectionDefs = [
  { key: "LandingPage", label: "Home", href: "/#LandingPage" },
  { key: "About",       label: "About", href: "/#About" },
  { key: "Schools",     label: "Schools", href: "/#Schools" },
  { key: "FAQ",         label: "FAQ", href: "/#FAQ" },
  { key: "Prizes",      label: "Prizes", href: "/#Prizes" },
  { key: "Rules",       label: "Rules", href: "/#Rules" },
  { key: "Itinerary",   label: "Itinerary", href: "/#Itinerary" },
  { key: "Team",        label: "Team", href: "/#Team" },
];

export default function Navbar() {
  const auth = useAuth();
  const pathname = usePathname();

  const tabs = useMemo(() => {
    const base = [...sectionDefs];
    if (auth.isAuthenticated) {
      base.push({ key: "profile", label: "Profile", href: "/profile" });
    }
    return base;
  }, [auth.isAuthenticated]);

  const [activeKey, setActiveKey] = useState<string>("LandingPage");
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });

  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const navContainerRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const onHome = pathname === "/";
    if (!onHome) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id; // matches section key
            setActiveKey(id);
            window.history.replaceState(null, "", `#${id}`);
          }
        });
      },
      { threshold: 0.1 }
    );

    const observed: Element[] = [];
    sectionDefs.forEach((s) => {
      const el = document.getElementById(s.key);
      if (el) {
        observer.observe(el);
        observed.push(el);
      }
    });

    return () => {
      observed.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    if (pathname.startsWith("/profile")) {
      setActiveKey("profile");
      return;
    }
    if (pathname === "/") {
      const hash = typeof window !== "undefined" ? window.location.hash.slice(1) : "";
      if (hash && sectionDefs.some((s) => s.key === hash)) setActiveKey(hash);
    }
  }, [pathname]);

  useEffect(() => {
    const update = () => {
      const idx = tabs.findIndex((t) => t.key === activeKey);
      const activeEl = navRefs.current[idx];
      const containerRect = navContainerRef.current?.getBoundingClientRect();
      if (activeEl && containerRect) {
        const { left, width } = activeEl.getBoundingClientRect();
        setHighlightStyle({ left: left - containerRect.left, width });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [activeKey, tabs, auth.isAuthenticated, pathname]);

  return (
    <div className="relative">
      <div className="hidden fixed top-0 right-0 left-0 z-100 md:block">
        <nav className="bg-white w-[90vw] p-[1.5vh_1vw] rounded-[30px] my-[4vh] mx-auto shadow-md scroll-smooth">
          <ul ref={navContainerRef} className="flex flex-row justify-around relative">
            <div
              className="absolute top-1/2 -translate-y-1/2 h-[70%] bg-[#EDAB1D] rounded-[40px] transition-all duration-300 ease-in-out"
              style={{ left: `${highlightStyle.left}px`, width: `${highlightStyle.width}px` }}
            />

            {tabs.map((tab, i) => (
              <li key={tab.key} className="relative z-10">
                <Link
                  href={tab.href}
                  onClick={() => setActiveKey(tab.key)}
                  ref={(el) => (navRefs.current[i] = el)}
                  className="font-sans px-[2vw] py-[1.5vh] rounded-[40px] text-black text-center text-lg block"
                >
                  {tab.label}
                </Link>
              </li>
            ))}

            {!auth.isAuthenticated && (
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

      <MobileNav auth={auth} activeKey={activeKey} />
    </div>
  );
}

function MobileNav({ auth, activeKey }: { auth: any; activeKey: string }) {
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
            {sectionDefs.map((s) => (
              <li key={s.key}>
                <Link
                  href={s.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-sans ${
                    activeKey === s.key
                      ? "text-black font-bold bg-[#EDAB1D] rounded-[40px] px-[2vw] py-[1vh]"
                      : "text-black"
                  }`}
                >
                  {s.label}
                </Link>
              </li>
            ))}
            {auth.isAuthenticated ? (
              <li>
                <Link href="/profile" onClick={() => setIsOpen(false)} className="text-black font-sans">
                  Profile
                </Link>
              </li>
            ) : (
              <li onClick={() => auth.signinRedirect()} className="cursor-pointer text-black font-sans">
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
