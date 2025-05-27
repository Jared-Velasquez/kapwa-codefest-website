import GoalCard from "@/app/components/GoalCard";

export default function About() {
  return (
    <div className="z-30">
      <h1 className="text-[3rem] text-center font-[Maragsa] text-black py-[5vh]">
        Our Goals
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center w-full m-auto gap-10 pb-15">
        <GoalCard
          goal="Uplift Filipino Busniesses"
          description="Support Filipino-owned small businesses with personalized, tech-driven solutions that address their unique needs and goals."
        />
        <GoalCard
          goal="Celebrate Culture Through Bayanihan"
          description="Honor Filipino Heritage Month by embodying bayanihan — working together as a community to uplift and empower one another through shared effort."
        />
        <GoalCard
          goal="Bridge Tech and Community"
          description="Create meaningful partnerships between students, creatives, and local entrepreneurs to solve real-world problems through collaboration."
        />
        <GoalCard
          goal="Inspire Purpose-Driven Innovation"
          description="Encourage participants to use their technical and creative skills for good, driving impact within underrepresented communities."
        />
      </div>
    </div>
  );
}
