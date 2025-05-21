"use client"

import styled from "styled-components";
import Link from "next/link";

const NavigationBar = styled.nav`
    background-color: white;
    width: 90vw;
    padding: 1vh 1vw;
    margin-top: 5vh;
    border-radius: 30px;
`

const StyledUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const StyledLi = styled.ul`
    color: black;
    font-family: "instrument sans", sans-serif;
`

export default function Navigation(){
    return(
        <NavigationBar>
            <StyledUl>
                <StyledLi><Link href="#LandingPage">Home</Link></StyledLi>
                <StyledLi><Link href="#About">About</Link></StyledLi>
                <StyledLi><Link href="#Schools">Schools</Link></StyledLi>
                <StyledLi><Link href="#FAQ">FAQ</Link></StyledLi>
                <StyledLi><Link href="#Sponsors">Sponsors</Link></StyledLi>
                <StyledLi><Link href="#Team">Team</Link></StyledLi>
                <StyledLi><Link href="#Prizes">Prizes</Link></StyledLi>
                <StyledLi><Link href="#Rules">Rules</Link></StyledLi>
                <StyledLi><Link href="#Itinerary">Itinerary</Link></StyledLi>
                <StyledLi><Link href="#SignUp">Sign-Up</Link></StyledLi>
            </StyledUl>
        </NavigationBar>
    )
}