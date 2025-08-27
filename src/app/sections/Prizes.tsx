import Image from "next/image";

export default function Prizes() {
    return(
        <div className="flex flex-col">
            <h1 className="text-[3rem] text-center font-[Maragsa] text-black py-[5vh]">Prizes</h1>
            <div className="shadow-[4px_4px_9px_rgba(0,0,0,0.5)] self-center flex min-h-[50vh] sm:min-h-[65vh] w-[80vw] lg:w-[60vw] bg-[rgb(255,255,255,0.9)] text-black rounded-lg items-center flex-col-reverse xl:flex-row">
                <div className="w-[80%] sm:w-[50%]">
                    <Image src="/house.svg" alt="house" width={500} height={500} className="w-full h-auto"/>
                </div>
                <div className="w-full xl:w-[50%] p-10">
                    <h3 className="text-black text-center md:text-left text-[calc(10px+3vh)] font-[550] font-[Maragsa] py-4">Implementation and Impact</h3>
                    <p className="text-black text-[calc(8px+2vh)] font-[instrument sans] py-2">Winners of the hackathon get the opportunity to work with real world professionals to fully implement their solutions for the Filipino businesses.</p>
                    <p className="text-black text-[calc(5px+2vh)] font-[instrument sans] py-2">There will be a winner for each company!</p>
                    <p className="text-gray-400 text-[calc(10px+1vh)] font-[instrument sans] py-2">Check out the companies in the 'About' section of the page</p>
                </div>
            </div>
        </div>
    )

}