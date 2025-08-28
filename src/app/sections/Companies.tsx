
import { Org } from "@/types";
import OrganizationCard from "@/app/components/OrganizationCard";
import Carousel from "@/app/components/Carousel";

export default function Companies() {
  const org1: Org = {
    id: "1",
    name: "SoCal Filipinos",
    description: "SoCal Filipinos mission is to connect and empower the Filipino community in Southern California by celebrating our shared experiences through meaningful content, dynamic programming and vibrant events that foster unity, cultural pride and lasting impact in the community. SoCal Filipinos is a non-profit/501c3 organization to help serve the Filipino community in Southern California.",
    website: "https://socalfilipinos.org/",
    img: "/OrgImages/SoCalFilipinosLogo.png",
  };

  const org2: Org = {
    id: "2",
    name: "Toasty Polvo",
    description: "Handcrafted in New Jersey, Toasty Polvo is proud to be a woman-owned, AAPI-led small business bringing celebration to every bite. We're building a joyful future—one polvoron at a time.",
    website: "https://www.toastypolvo.com/",
    img: "/OrgImages/ToastyPolvoLogo.png",
  };

  const org3: Org = {
    id: "3",
    name: "Pisayian",
    description: "The mission of the Philippine Science High School International Alumni Foundation, Inc. (Pisayian) is to foster fellowship and community among international alumni of the Philippine Science High School, in order to\n" +
        "promote the education and the advancement of science, technology, engineering, and mathematics (STEM), and to encourage collaborative work among educators, scientists and engineers in research, development, and implementation; and\n" +
        "support interaction among individuals of Philippine descent in their scholarly, educational and scientific endeavors.",
    website: " https://www.pisayian.org/",
    img: "/OrgImages/PisayianImage.png",
  };

  const organizations: Org[] = [org1, org2, org3];

  return (
    <div className="flex w-full justify-center h-[100vh]">
      <div className="flex w-[80vw] flex-col justify-center">
        <h2 className="text-[3rem] text-center font-[Maragsa] text-black py-[5vh]">
          Who We&apos;re Building For
        </h2>
        <div className="flex h-[auto] w-[80vw] bg-white text-black rounded-lg items-center">
          <Carousel>
                        {organizations.map((org, index) => (
                            <OrganizationCard key={index} org={org} />
                        ))}
          </Carousel>

        </div>
      </div>
    </div>
  );
}
