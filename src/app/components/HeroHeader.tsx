"use client";

export default function HeroHeader() {
  return (
    <header className="flex flex-col gap-5 text-center text-black z-10 p-5">
      <h1 className="font-[TDSulog] text-[3rem]">FILIPINO-AMERICAN</h1>
      <h2 className="flex font-[Maragsa] text-[2rem] justify-center items-center">
        <svg
          width={30}
          height={51}
          viewBox="0 0 20 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 2L2 16.5L18 31.5"
            stroke="black"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex gap-5 text-black px-6">
          <span>H I S T O R Y</span>
          <span>M O N T H</span>
        </div>
        <svg
          width={30}
          height={51}
          viewBox="0 0 20 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L18 16.5L2 31.5"
            stroke="black"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </h2>
      <h1 className="font-[TDSulog] text-[3rem]">HACKATHON</h1>
    </header>
  );
}
