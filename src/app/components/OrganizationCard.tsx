import Link from "next/link";
import styled from "styled-components";
import { Org } from "@/types";

const OrgName = styled.h3`
  font-family: TDSulog, sans-serif;
  letter-spacing: 2px;
`;
const Description = styled.h1`
  color: black;
  font-size: calc(2px + 2vh);
  font-weight: normal;
  font-family: "instrument sans", sans-serif;
`;

export default function OrganizationCard({ org }: { org: Org }) {
  return (
    <div className="flex items-center py-5 md:px-[8.5vw] px-[5vw] md:flex-row flex-col">
      <div className="w-[40vw] md:w-[33vw] md:h-[40vh] rounded-lg flex items-center justify-center overflow-hidden">
          <img
              src={org.img}
              alt={org.name + "'s Image"}
              className="md:max-w-full max-w-[40vw] max-h-[20vh] md:max-h-full object-contain"
          />
      </div>
      <div className="flex flex-col p-10 md:w-[30vw] w-[70vw] gap-[3vh]">
        <OrgName className="text-4xl font-bold text-gray-900">
          {org.name}
        </OrgName>
        <Description>{org.description}</Description>
        <Link
          className="underline text-gray-500 cursor-pointer"
          href={org.website}
          target="_blank"
        >
          {org.name}&apos;s Website
        </Link>
      </div>
    </div>
  );
}
