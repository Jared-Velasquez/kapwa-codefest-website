export default function GoalCard({ goal, description }: { goal: string; description: string }) {
    return (
        <div className=" w-[80vw] lg:w-[20vw] lg:min-h-[45vh] bg-white rounded-lg">
            <div className="h-3 bg-[#E7DAC3] rounded-t-lg"></div>
            <div className="py-[2vh] px-[2vw]">
                <h2 className="text-black text-[calc(10px+3vh)] font-[550] font-[Maragsa] pb-[2vh]">{goal}</h2>
                <h3 className="text-black text-[calc(2px+2vh)] font-normal font-['instrument_sans']">{description}</h3>
            </div>

        </div>
    )

}