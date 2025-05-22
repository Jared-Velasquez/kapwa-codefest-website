"use client";
import LandingPage from "@/app/sections/LandingPage";
import About from "@/app/sections/About";
import Goals from "@/app/sections/Goals";
import Companies from "@/app/sections/Companies";

export default function Home() {
    return (
        <>
            <section id="LandingPage" className="relative h-[150vh] bg-green-50 bg-cover bg-center">
                <img
                    className="absolute w-full top-[40vh] z-8"
                    src="/backgrounds/landing-foreground.png"
                    alt="logo"
                />
                <LandingPage />
            </section>
            <section className="relative z-10 h-[150vh] justify-center" id="About">
                <About />
                <Goals />
                <Companies />
            </section>
        </>
    );
}
