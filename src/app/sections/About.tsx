export default function About(){
    return(
        <div className="z-30">
            <h1 className="text-[3rem] text-center font-[Maragsa] text-black py-[5vh]">About</h1>
            <div className="w-full">
                <div className=" flex justify-around flex-col sm:px-20 h-[70vh] bg-red gap-10">
                    <div className="flex self-center w-[80vw] xl:w-[40vw] bg-white text-black p-[5vh] xl:ml-[60vh] rounded-lg items-center">
                        <p className="xl:text-[1rem]">In celebration of Filipino Heritage Month, we are proud to host a hackathon rooted in the spirit of <span className="font-bold">bayanihan</span>  — the Filipino tradition of communal unity and support. This event brings together developers, designers, and problem-solvers to collaborate with local Filipino-owned businesses, helping them tackle real challenges through creative software and hardware solutions.</p>
                    </div>
                    <div className="flex flex-col xl:self-end self-center w-[80vw] xl:w-[40vw] bg-white text-black p-[5vh] rounded-lg items-center gap-3">
                        <div className="flex flex-col sm:flex-row sm:self-start sm:gap-5 gap-1 self-center" >
                            <h3 className="text-5xl font-[TDSulog]">Bayanihan</h3>
                            <img className="h-3 w-auto self-center" src="/icons/Star.png" alt="house" />
                            <h3 className="text-2xl font-[TDSulog] self-center">[buy-uh-nee-hun]</h3>
                        </div>
                        <p className="text-[1rem]">Derived from the word bayan meaning town, nation, or community in general, "Bayanihan"  translates to "being a bayan," and refers to the spirit of communal unity and cooperation.</p>
                    </div>
                </div>
            </div>


        </div>

    )
}