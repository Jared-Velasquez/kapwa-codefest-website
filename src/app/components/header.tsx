"use client"

import styled from 'styled-components';
import Navigation from "@/app/components/navigation";

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Header(){
    return(
        <StyledHeader>
            <Navigation/>
        </StyledHeader>
    )
}