import Button from "@/app/components/button";
import FaqTab from "@/app/components/faqTab";

export default function Home() {
  return (
      <>
        <Button onClick={"#Signup"} text="hello"/>
        <FaqTab question={"What is a hackathon"} answer={"answer 1"}/>
          <FaqTab question={"What is a Filipino"} answer={"answer 2"}/>

      </>

  );
}
