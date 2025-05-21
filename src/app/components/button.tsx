"use client"

import styled from 'styled-components';
import Link from 'next/link';

const StyledButton = styled(Link)`
    background: linear-gradient(to right, #e9a400, #f9d46c);
    border-radius: 40px;
    padding: 2vh 2vw;
    color: black;
    cursor: pointer;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
    transition: transform 0.2s;
    font-family: "instrument sans", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: fit-content;

    p {
        margin: 0;
        font-size: 1rem;
        line-height: 1.2;
    }

    &:hover {
        transform: scale(1.03);
    }

    &:active {
        transform: scale(0.98);
    }
`;


export default function Button({text, onClick}: {text: string, onClick: any}) {
    return(
        <StyledButton href={onClick}>
        <p>{text}</p>
        </StyledButton>
    )
}