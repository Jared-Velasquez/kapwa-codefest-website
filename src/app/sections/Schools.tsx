import Image from "next/image";

export default function Schools() {
  return (
    <div className="flex items-center flex-col">
      <div className="self-center xl:self-end xl:pr-[15vw] pt-[20vh] w-[80vw] xl:w-[37vw]">
        <h1 className="text-[3rem] text-center font-[Maragsa] text-black py-[5vh]">
          Participating Schools
        </h1>
        <h3 className="text-black text-[calc(2px+2vh)] font-normal font-[instrument sans] text-center">
          We are honored to be hosting this hackathon with{" "}
          <strong>6 schools</strong> nationwide, take a look at who&apos;s
          involved!
        </h3>
      </div>
      <div className="pt-12.5 md:pt-30 xl:pt-55 px-5 flex items-center justify-center flex-wrap gap-20">
        <Image
          alt="Boston University is a school helping organize this hackathon"
          src="/schools/bu.png"
          width={200}
          height={150}
          className="object-contain"
        />
        <Image
          alt="Wayne State University is a school helping organize this hackathon"
          src="/schools/wsu.png"
          width={200}
          height={150}
          className="object-contain"
        />
        <Image
          alt="University of Michigan is a school helping organize this hackathon"
          src="/schools/m-1.png"
          width={200}
          height={150}
          className="object-contain"
        />
        <Image
          alt="University of California, Irvine is a school helping organize this hackathon"
          src="/schools/uci.webp"
          width={200}
          height={150}
          className="object-contain"
        />
        <Image
          alt="University of California, San Diego is a school helping organize this hackathon"
          src="/schools/ucsd.png"
          width={200}
          height={150}
          className="object-contain"
        />
        <Image
          alt="University of California, Los Angeles is a school helping organize this hackathon"
          src="/schools/ucla.png"
          width={200}
          height={150}
          className="object-contain"
        />
      </div>
    </div>
  );
}
