import Link from "next/link";
import styled from "styled-components";
import { Org } from "@/types";

const OrgName = styled.h3`
    font-family: TDSulog, sans-serif;
    letter-spacing: 2px;
`
const Description = styled.h1`
    color: black;
    font-size: calc(2px + 2vh);
    font-weight: normal;
    font-family: "instrument sans", sans-serif;
`

export default function Organization({ org }: { org: Org;}) {
    return(
        <div className="flex items-center py-5 px-[8.5vw]">
            <div className="bg-gray-400 w-[33vw] h-[40vh] rounded-lg items-center">

            </div>
            <div className="flex flex-col p-10 w-[30vw] gap-[3vh]">
                <OrgName className="text-4xl font-bold text-gray-900">
                    {org.name}
                </OrgName>
                <Description>
                    {org.description}
                </Description>
                <Link className="underline text-gray-500 cursor-pointer" href={org.website} target="_blank">[Organization]'s Website</Link>
            </div>
        </div>
    )
}