// import styled from 'styled-components';
import FaqTab from "@/app/components/faqTab";

export default function FAQ() {
  return (
    <div className="flex items-center flex-col pt-[40vh]">
      <h2 className="text-[3rem] text-center font-[Maragsa] text-black py-[5vh]">
        FAQ
      </h2>
      <div className="flex flex-col lg:w-[60vw] z-10 p-5 gap-[3vh]">
        <FaqTab
          question={"What is Fil-Am History Month Hackathon?"}
          answer={"Here is the answer"}
        />
        <FaqTab
          question={"When is the hackathon?"}
          answer={"October 3rd-6th"}
        />
        <FaqTab
          question={"Where will this be held?"}
          answer={"This hackathon is virtual and will be held on Discord!"}
        />
        <FaqTab question={"When/Where can I apply?"} answer={"TDB"} />
        <FaqTab
          question={"What if I don't have a team?"}
          answer={
            "No worries! There will be an opportunity to meet new people and create teams."
          }
        />
        <FaqTab question={"This is a question"} answer={"Here is the answer"} />
        <FaqTab question={"This is a question"} answer={"Here is the answer"} />
      </div>
    </div>
  );
}
