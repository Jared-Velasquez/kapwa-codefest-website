"use client";
// import styled from 'styled-components';

export default function HeroHeader() {
  return (
    <header className="text-center text-black z-10 p-5">
      <h1 className="font-[TDSulog] text-[3rem]">FILIPINO-AMERICAN</h1>
      <h2 className="flex font-[Maragsa] text-[2rem] justify-between items-center">
        <img className="rotate-90" src="/icons/TabArrow.png" alt="Arrow icon" />
        <div className="flex justify-between items-center text-black py-[1vh] px-[2vw]">
          HISTORY MONTH
        </div>
        <img
          className="rotate-270"
          src="/icons/TabArrow.png"
          alt="Arrow icon"
        />
      </h2>
      <h1 className="font-[TDSulog] text-[3rem]">HACKATHON</h1>
    </header>
  );
}
