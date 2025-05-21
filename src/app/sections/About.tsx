import styled from "styled-components"

const Heading = styled.h2`
    font-size: 3rem;
    text-align: center;
    font-family: Maragsa, sans-serif;
    color: black;
    padding: 5rem 0 3rem 0;
`

const CardText = styled.p`
    font-size: 1rem;
`
const Bayanihan = styled.h3`
    font-size: 3rem;
    font-family: TDSulog, sans-serif;
`
const Definition = styled.h3`
    font-size: 1.5rem;
    font-family: Maragsa, sans-serif;
`

export default function About(){
    return(
        <div className="z-30">
            <Heading>About</Heading>

            <div className="flex h-[70vh]">
                <img className="h-[70vh] w-auto" src="/house.png" alt="house" />
                <div className="w-full flex justify-around items-around flex-col px-20 h-[60vh] gap-10">
                    <div className="flex self-start w-[40vw] h-auto h-max-[30vh] bg-white text-black p-[5vh] rounded-lg items-center">
                        <CardText>In celebration of Filipino Heritage Month, we are proud to host a hackathon rooted in the spirit of <span className="font-bold">bayanihan</span>  — the Filipino tradition of communal unity and support. This event brings together developers, designers, and problem-solvers to collaborate with local Filipino-owned businesses, helping them tackle real challenges through creative software and hardware solutions.</CardText>
                    </div>
                    <div className="flex flex-col self-end w-[40vw] h-auto h-max-[30vh] bg-white text-black p-[5vh] rounded-lg items-center gap-3">
                        <div className="flex self-start gap-5" >
                            <Bayanihan>Bayanihan</Bayanihan>
                            <img className="h-3 w-auto self-center" src="/icons/Star.png" alt="house" />
                            <Definition className="self-center">[buy-uh-nee-hun]</Definition>
                        </div>
                        <CardText>Derived from the word bayan meaning town, nation, or community in general, "Bayanihan"  translates to "being a bayan," and refers to the spirit of communal unity and cooperation.</CardText>
                    </div>
                </div>
            </div>


        </div>

    )
}