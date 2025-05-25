import TeamProfile from "@/app/components/teamProfile";
export default function Team() {
    return (
        <div className="flex flex-col">
            <h1 className="text-[3rem] sm:text-left text-center font-[Maragsa] text-white pt-[5vh]">Meet the Team</h1>
            <div className="flex flex-wrap justify-center overflow-y-auto overflow-x-hidden h-[65vh] w-[90vw] md:w-[70vw] gap-x-20">
                <TeamProfile />
                <TeamProfile />
                <TeamProfile />
                <TeamProfile />
                <TeamProfile />
                <TeamProfile />
                <TeamProfile />
                <TeamProfile />
            </div>
        </div>
    );
}
