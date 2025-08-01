"use client"
import LandingPage from "@/app/sections/LandingPage";
import Footer from "@/app/components/Footer";
import { useAuth } from "react-oidc-context";
import Signup from "@/app/sections/Signup";

export default function ProfilePage() {
    const auth = useAuth();
    
    return (
        <div className="overflow justify-center bg-gradient-to-b from-[#CFE8EC] to-[#FEA27B]">
            <div className="p-10"/>
            <div className="bg-[url(/backgrounds/landing-foreground.png)] bg-no-repeat bg-cover sm:bg-[position:center_top] bg-[position:center_top] -my-[20vh] sm:my-[] p-[vh] sm:p-[10vh]">

                <section id="Signup" className="pt-60 sm:pt-20 relative z-10 min-h-[100vh] sm:min-h-[150vh]">
                        <Signup/>
                </section>
            </div>
        </div>
    );
}

