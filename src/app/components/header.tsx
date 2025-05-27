"use client";
// import styled from 'styled-components';

export default function Header() {
  return (
    <header className="text-center text-black z-10 p-5">
      <h1 className="font-[TDSulog] text-[3rem]">Filipino-American</h1>
      <h2 className="flex font-[Maragsa] text-[2rem] justify-between items-center">
        <img className="rotate-90" src="/icons/TabArrow.png" alt="Arrow icon" />
        <div className="flex justify-between items-center text-black py-[1vh] px-[2vw]">
          History Month
        </div>
        <img
          className="rotate-270"
          src="/icons/TabArrow.png"
          alt="Arrow icon"
        />
      </h2>
      <h1 className="font-[TDSulog] text-[3rem]">Hackathon</h1>
    </header>
  );
}
