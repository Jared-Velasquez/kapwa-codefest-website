import Carousel from "@/app/components/Carousel";
import Link from "next/link";

export default function Rules() {
  const rules: String[] = ["first rule", "last rule"];
  return (
    <div className="w-full">
      <h2 className="text-[3rem] text-center font-[Maragsa] text-black py-[5vh]">
        Rules
      </h2>
      <div className=" flex justify-around flex-col sm:px-20">
        <div className="flex flex-col xl:self-end self-center w-[40vw] xl:w-[40vw] bg-white text-black p-[5vh] rounded-lg items-center gap-3">
          <Carousel>
            {rules.map((rule, index) => (
              <div key={index} className="flex items-center py-10 px-[5vw]">
                {rule}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
