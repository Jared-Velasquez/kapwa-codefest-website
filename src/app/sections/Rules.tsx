import Carousel from "@/app/components/Carousel";
import Link from "next/link";


export default function Rules() {
  const rules: String[] =
      [
          "Each team may have up to four members.",
          "You may submit only one project to this hackathon, and each project should be for a single company.",
          "Projects must be started and completed within the official hackathon period. All code must be written during the event, except for open-source libraries and frameworks. However, designs and assets may be created before the hackathon begins.",
          "Participants are expected to treat one another with respect and professionalism at all times. Harassment, discrimination, or inappropriate behavior will not be tolerated. Please adhere to the event’s code of conduct.",
          "All projects must be submitted by the stated deadline. Late submissions will not be accepted.",
          "Projects will be evaluated by representatives from our partner companies, with emphasis on how well each project addresses their business needs. All judging decisions are final."
      ];
  return (
    <div className="w-full">
      <h2 className="text-[3rem] text-center font-[Maragsa] text-black py-[20vh]">
        Rules
      </h2>
      <div className=" flex justify-around flex-col sm:px-20">
        <div className="flex self-center sm:self-end min-h-[50vh] sm:w-[50vw] w-[80vw] text-black rounded-lg items-center bg-[#EDAB1D]">
          <Carousel>
            {rules.map((rule, index) => (
                <div className="flex items-center py-5 px-[13.5vw]">
                    <div className="w-[53vw] sm:w-[33vw] flex justify-center items-center ">
                        <div className="text-center text-2xl">
                            {rule}
                        </div>
                    </div>
                </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
