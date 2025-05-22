import styled from "styled-components";
import { Org } from "@/types"
import Organization from "@/app/components/organization";
import Carousel from "@/app/components/carousel";


const Heading = styled.h2`
    font-size: 3rem;
    text-align: left;
    font-family: Maragsa, sans-serif;
    color: black;
    padding: 5rem 0 3rem 0;
`

export default function Companies() {
    const org1 : Org = {
        id: "1",
        name: "org 1",
        description: "lalalla",
        website: "https://www.google.com",
        img: ""
    }

    const org2 : Org = {
        id: "2",
        name: "org 2",
        description: "lalalla",
        website: "",
        img: ""
    }

    const organizations : Org[] = [
        org1, org2
    ]

    return(
        <div className="flex w-full justify-center">
            <div className="flex w-[80vw] flex-col justify-center">
                <Heading>Who We're Building For</Heading>
                <div className="flex h-[65vh] w-[80vw] bg-white text-black rounded-lg items-center">
                    <Carousel>
                        {organizations.map((org, index) => (
                            <Organization key={index} org={org} />
                        ))}
                    </Carousel>

                </div>
            </div>
        </div>
    )
}