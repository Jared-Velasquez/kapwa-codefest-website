export default function Event({ time, eventName, description = "" }: { time: string; eventName: string; description?: string}) {
    return(
        <div className="flex py-5 gap-10 text-1xl md:text-2xl ">
            <div className="w-[40vw] sm:w-[15vw]">
                <p>{time}</p>
            </div>
            <div className="w-[60vw] sm:w-[70vw]">
                <p> {eventName}</p>
                <p className= "text-gray-600">{description}</p>
            </div>

        </div>
    )
}