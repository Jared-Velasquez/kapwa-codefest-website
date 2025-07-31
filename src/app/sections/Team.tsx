import TeamProfile from "@/app/components/TeamProfile";

export default function Team() {
  return (
    <div className="flex flex-col">
      <h1 className="text-[3rem] sm:text-left text-center font-[Maragsa] text-white pt-[5vh]">
        Meet the Team
      </h1>
        <div className="justify-center overflow-y-auto overflow-x-hidden h-[70vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#C58F1B] [&::-webkit-scrollbar-thumb]:bg-[#E7DAC3] dark:[&::-webkit-scrollbar-track]:bg-[#C58F1B] dark:[&::-webkit-scrollbar-thumb]:bg-[#E7DAC3]">
            <div>
                <h3 className="text-[2rem] font-[Maragsa] py-5">Organizers</h3>
                <div className="flex flex-wrap justify-center overflow-x-hidden w-[90vw] md:w-[70vw] gap-x-20">
                    <TeamProfile headshot={"/headshots/AlyssaHeadshot.jpg"} name={"Alyssa Najera"} school={"Boston University"} linkedin={"www.linkedin.com/in/alyssanaj7571"} />
                    <TeamProfile headshot={"/headshots/BensonHeadshot.jpg"} name={"Benson Manzano"} school={"University of California Irvine"} linkedin={"https://www.linkedin.com/in/benson-manzano/"} />
                    <TeamProfile headshot={"/headshots/FaithHeadshot.jpg"} name={"Faith Rivera"} school={"University of California San Diego"} linkedin={"https://www.linkedin.com/in/faithnrivera \n"} />
                    <TeamProfile headshot={"/headshots/JaredHeadshot.jpg"} name={"Jared Velasquez"} school={"University of California Los Angeles"} linkedin={"https://www.linkedin.com/in/jaredvel25/"} />
                    <TeamProfile headshot={"/headshots/JordanHeadshot.jpg"} name={"Jordan Cruz"} school={"Wayne State University "} linkedin={"http://linkedin.com/in/jordan-cruz-6029a0331"} />
                    <TeamProfile headshot={"/headshots/KieranHeadshot.jpeg"} name={"Kieran Llarena"} school={"University of Michigan-Dearborn"} linkedin={"https://www.linkedin.com/in/kllarena07/"} />
                    <TeamProfile headshot={"/headshots/ReuvenHeadshot.jpg"} name={"Reuven Clay Villanueva"} school={"University of California Los Angeles"} linkedin={"https://www.linkedin.com/in/reuvenvilla"} />

                </div>
            </div>
            {/*
            <div>
                <h3 className="text-[2rem] font-[Maragsa] py-5">Designers</h3>
                <div className="flex flex-wrap justify-center overflow-y-auto overflow-x-hidden w-[90vw] md:w-[70vw] gap-x-20">
                    <TeamProfile headshot={"/headshots/AlyssaHeadshot.jpg"} name={"Alyssa Najera"} school={"Boston University"} linkedin={"https://www.linkedin.com/in/kllarena07/"} />
                    <TeamProfile headshot={"/headshots/BensonHeadshot.jpg"} name={"Benson Manzano"} school={"University of California Irvine"} linkedin={"https://www.linkedin.com/in/benson-manzano/"} />
                    <TeamProfile headshot={"/headshots/FaithHeadshot.jpg"} name={"Faith Rivera"} school={"University of California San Diego"} linkedin={"https://www.linkedin.com/in/faithnrivera \n"} />
                    <TeamProfile headshot={"/headshots/JaredHeadshot.jpg"} name={"Jared Velasquez"} school={"University of California Los Angeles"} linkedin={"https://www.linkedin.com/in/jaredvel25/"} />
                    <TeamProfile headshot={"/headshots/JordanHeadshot.jpg"} name={"Jordan Cruz"} school={"Wayne State University "} linkedin={"http://linkedin.com/in/jordan-cruz-6029a0331"} />
                    <TeamProfile headshot={"/headshots/KieranHeadshot.jpeg"} name={"Kieran Llarena"} school={"University of Michigan-Dearborn"} linkedin={"https://www.linkedin.com/in/kllarena07/"} />
                    <TeamProfile headshot={"/headshots/ReuvenHeadshot.jpg"} name={"Reuven Clay Villanueva"} school={"University of California Los Angeles"} linkedin={"https://www.linkedin.com/in/reuvenvilla"} />

                </div>
            </div>*/}
        </div>
    </div>
  );
}
