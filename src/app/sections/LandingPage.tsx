import Button from "@/app/components/button"
import Header from "@/app/components/header"


export default function LandingPage() {
    return(
            <div className="min-h-[100vh] flex justify-center items-center flex-col bg-gradient-to-b from-[#CFE8EC] to-[#FEA27B]">
                <img className="absolute top-0" src="/backgrounds/landing-background.png" alt="logo"/>
                <Header/>
                <Button text={"Sign Up"} onClick={"#SignUp"}/>
            </div>
    )

}