// import styled from 'styled-components';
import FaqTab from "@/app/components/FAQTab";

export default function FAQ() {
  return (
    <div className="flex items-center flex-col pt-[40vh]">
      <h2 className="text-[3rem] text-center font-[Maragsa] text-black py-[5vh]">
        FAQ
      </h2>
      <div className="flex flex-col lg:w-[60vw] z-10 p-5 gap-[3vh]">
        <FaqTab
          question={"What is Fil-Am History Month Hackathon?"}
          answer={`In celebration of Filipino Heritage Month, we’re hosting a hackathon to help local Filipino businesses with any issues that they might have by providing them with software or hardware solutions.\n\n\nSome examples of what this might look like are: a custom website for a business or custom inventory management software. These examples are not exhaustive and in reality will be derived from whatever businesses we decide to help.`}
        />
        <FaqTab
          question={"When is the hackathon?"}
          answer={
            "The Fil-Am History Month Hackathon will be held from October 3rd-6th"
          }
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
        <FaqTab
          question={"What is the schedule?"}
          answer={"Check out the itinerary below!"}
        />
        {/* <FaqTab question={"This is a question"} answer={"Here is the answer"} /> */}
      </div>
    </div>
  );
}
