import Button from "@/app/components/button"
import Header from "@/app/components/header"


export default function LandingPage() {
    return(
            <div className="h-[100vh] sm:h-[100vh] flex justify-center items-center flex-col">
                <Header/>
                <Button text={"Sign Up"} onClick={"#SignUp"}/>
            </div>
    )

}