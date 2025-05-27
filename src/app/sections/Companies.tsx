import styled from "styled-components";
import { Org } from "@/types";
import OrganizationCard from "@/app/components/OrganizationCard";
import Carousel from "@/app/components/Carousel";

export default function Companies() {
  const org1: Org = {
    id: "1",
    name: "org 1",
    description: "lalalla",
    website: "https://www.google.com",
    img: "",
  };

  const org2: Org = {
    id: "2",
    name: "org 2",
    description: "lalalla",
    website: "",
    img: "",
  };

  const organizations: Org[] = [org1, org2];

  return (
    <div className="flex w-full justify-center h-[100vh]">
      <div className="flex w-[80vw] flex-col justify-center">
        <h2 className="text-[3rem] text-center font-[Maragsa] text-black py-[5vh]">
          Who We&apos;re Building For
        </h2>
        <div className="flex h-[65vh] w-[80vw] bg-white text-black rounded-lg items-center">
          {/* <Carousel>
                        {organizations.map((org, index) => (
                            <Organization key={index} org={org} />
                        ))}
                    </Carousel>W*/}
          <p className="text-center w-[100%] text-4xl ">
            Companies Will be Revealed Soon! Stay Tuned{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
