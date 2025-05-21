"use client"
import {useState} from "react";
import styled from "styled-components";

const DropDownTab = styled.div<{ $active: boolean }>`
    padding-bottom: 2vh;
    cursor: pointer;

    img {
        height: 1.5vh;
        width: auto;
        transition: transform 0.3s ease;
        transform: ${(props) => (props.$active ? "rotate(180deg)" : "rotate(0deg)")};
    }

    h4 {
        font-family: "instrument sans", sans-serif;
        font-size: calc(5px + 2vh);
        letter-spacing: 2px;
        
    }
`;

const Tab = styled.div`
    background-color: white;
    border-radius: 12px;
`

const QuestionDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1vh 2vw;
    background-color: white;
    color: black;
    border: solid black;
    align-items: center;
    border-radius: 12px;
`

const AnswerDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1vh 2vw;
    background-color: white;
    color: black;
    box-shadow: 2px 2px 1px #00000040;
    align-items: center;
    border-radius: 0 0 12px 12px;
    p{
        padding-top: 1.5vh
    }
`


export default function FaqTab({ question, answer }: { question: string; answer: string }) {
    const [active, setActive] = useState(false);

    function toggleTab() {
        setActive((prev) => !prev);
    }

    return (
        <DropDownTab onClick={toggleTab} $active={active}>
            <Tab>
                <QuestionDiv>
                    <h4>{question}</h4>
                    <img src="/icons/TabArrow.png" alt="Arrow icon" />
                </QuestionDiv>
                {active &&
                    <AnswerDiv>
                        <p>
                            {answer}
                        </p>
                    </AnswerDiv>
                }
            </Tab>

        </DropDownTab>
    );
}
