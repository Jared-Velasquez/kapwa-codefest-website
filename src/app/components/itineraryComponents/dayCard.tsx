export default function DayCard({ date, children }: { date: string; children: any }){
    return(
            <div className="self-center flex flex-row w-[80vw] min-h-[20vh] bg-[rgb(255,255,255,0.9)] rounded-lg">
                <div className="w-3 bg-[#D2E9EC] rounded-l-lg"></div>
                <div className="w-[73vw] py-[2vh] px-[2vw] text-black">
                    <h1 className="font-[TDSulog] text-3xl py-3 text-center sm:text-left">{date}</h1>
                    {children}
                </div>
            </div>
    )
}