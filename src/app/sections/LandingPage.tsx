import Button from "@/app/components/Button";
import HeroHeader from "@/app/components/HeroHeader";

export default function LandingPage() {
  return (
    <div className="h-[100vh] sm:h-[100vh] flex justify-center items-center flex-col">
      <HeroHeader />
      <Button text={"Sign Up"} onClick={"#SignUp"} />
    </div>
  );
}
