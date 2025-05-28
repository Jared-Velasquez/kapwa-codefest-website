"use client";
import LandingPage from "@/app/sections/LandingPage";
import About from "@/app/sections/About";
import Goals from "@/app/sections/Goals";
import Companies from "@/app/sections/Companies";
import Schools from "@/app/sections/Schools";
import FAQ from "@/app/sections/FAQ";
import Prizes from "@/app/sections/Prizes";
import Rules from "@/app/sections/Rules";
import Itinerary from "@/app/sections/Itinerary";
import Team from "@/app/sections/Team";
import Signup from "@/app/sections/Signup";
import Footer from "@/app/components/Footer";

export default function Home() {
    return (
        <div className="overflow-hidden justify-center bg-gradient-to-b from-[#CFE8EC] to-[#FEA27B]">

            <div className="bg-[url(/backgrounds/landing-foreground.png)] bg-no-repeat bg-cover sm:bg-[position:center_top] bg-[position:center_top] -my-[30vh] sm:my-0">


            <section id="LandingPage" className="pt-60 sm:pt-20 relative z-10 min-h-[100vh] sm:min-h-[150vh]">
                    <LandingPage />
                </section>
                <section id="About" className="relative z-10">
                    <div className="py-20 relative z-10 min-h-[100vh]">
                        <About />
                    </div>
                    <div className="py-20 relative z-10 min-h-[60vh]">
                        <Goals />
                    </div>
                    <div className="pb-20 relative z-10 min-h-[130vh]">
                        <Companies />
                    </div>
                </section>
            </div>
            <div className="bg-[url(/backgrounds/schoolsBackground.png)] bg-no-repeat bg-size(auto_full) bg-cover  bg-[position:top_center]">
                <section id="Schools" className="py-20 relative z-10 min-h-[150vh]">
                    <Schools />
                </section>
            </div>
            <div className="bg-[url(/backgrounds/FAQBackground.png)] bg-no-repeat bg-cover bg-[position:top_center]">
                <section id="FAQ" className="py-20 relative z-10 min-h-[250vh]" >
                    <FAQ />
                </section>
            </div>
            <div className="bg-[url(/backgrounds/prizesBackground.png)] bg-no-repeat bg-cover bg-[position:center] ">
                <section id="Prizes" className="-scroll-mt-50 py-20 flex relative z-10 min-h-[180vh] items-center flex justify-center" >
                    <Prizes />
                </section>
            </div>
            <div className="bg-[url(/backgrounds/RulesBackground.png)] bg-no-repeat bg-cover bg-[position:top_center]">
                <section id="Rules" className="py-20 relative z-10 min-h-[150vh]" >
                    <Rules />
                </section>
            </div>
            <div className="bg-[url(/backgrounds/ItineraryBackground.png)] bg-no-repeat bg-cover bg-[position:top_center]">
                <section id="Itinerary" className="py-20 relative z-10 min-h-[280vh]" >
                    <Itinerary />
                </section>
            </div>
            <div className="bg-[url(/backgrounds/TeamBackground.png)] bg-no-repeat bg-cover bg-[position:top_center]">
                <section id="Team" className="-scroll-mt-100 py-20 flex relative z-10 min-h-[180vh] sm:min-h-[200vh] justify-center items-center" >
                    <Team />
                </section>
            </div>
            <div className="bg-[url(/backgrounds/SignUpBackground.png)] bg-no-repeat bg-cover bg-[position:top_center]">
                <section id="SignUp" className="relative z-10 min-h-[100vh] sm:min-h-[180vh] flex justify-center items-center" >
                    <Signup />
                </section>
                <Footer />
            </div>
        </div>
    );
}
