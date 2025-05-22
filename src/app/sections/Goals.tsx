import styled from "styled-components"
import GoalCard from "@/app/components/goalCard";

const Heading = styled.h2`
    font-size: 3rem;
    text-align: center;
    font-family: Maragsa, sans-serif;
    color: black;
    padding: 5rem 0 3rem 0;
`


export default function About(){
    return(
        <div className="z-30">
            <Heading>Our Goals</Heading>
            <div className="flex justify-center w-full m-auto gap-10 pb-15">
                <GoalCard goal="Uplift Filipino Busniesses" description="Support Filipino-owned small businesses with personalized, tech-driven solutions that address their unique needs and goals."/>
                <GoalCard goal="Celebrate Culture Through Bayanihan" description="Honor Filipino Heritage Month by embodying bayanihan — working together as a community to uplift and empower one another through shared effort."/>
                <GoalCard goal="Bridge Tech and Community" description="Create meaningful partnerships between students, creatives, and local entrepreneurs to solve real-world problems through collaboration."/>
                <GoalCard goal="Inspire Purpose-Driven Innovation" description="Encourage participants to use their technical and creative skills for good, driving impact within underrepresented communities."/>


            </div>
        </div>

    )
}