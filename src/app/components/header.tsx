"use client"
import styled from 'styled-components';

const StyledTitle = styled.h1`
    font-family: TDSulog, sans-serif;
    font-size: 3rem;
`

const SubTitle = styled.h2`
    font-family: Maragsa, sans-serif;
    font-size: 2rem;
    letter-spacing: 0.25vw;
    
`
const SubTitleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1vh 2vw;
    color: black;
    align-items: center;

`

export default function Header(){
    return(
        <header className="text-center text-black z-5 p-5">
            <StyledTitle>
                Filipino-American
            </StyledTitle>
            <SubTitleDiv>
                <img className="rotate-90" src="/icons/TabArrow.png" alt="Arrow icon" />
                <SubTitle>History Month</SubTitle>
                <img className="rotate-270" src="/icons/TabArrow.png" alt="Arrow icon" />
            </SubTitleDiv>
            <StyledTitle>Hackathon</StyledTitle>
        </header>
    )
}