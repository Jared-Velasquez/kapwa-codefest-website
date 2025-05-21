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
        font-size: calc(5px + 2vh);
        letter-spacing: 2px;
        
    }
`;

const Tab = styled.div`
    font-family: "instrument sans", sans-serif;
    background-color: white;
    border-radius: 12px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.75);
    
`

const QuestionDiv = styled.div<{ $active: boolean }>`
    display: flex;
    justify-content: space-between;
    padding: 1vh 2vw;
    background-color: white;
    color: black;
    align-items: center;
    border-radius: 12px;
    border-bottom: ${(props) => (props.$active ? "solid 3px rgba(71, 71, 71, 0.8)" : "none")};


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
`


export default function FaqTab({ question, answer }: { question: string; answer: string }) {
    const [active, setActive] = useState(false);

    function toggleTab() {
        setActive((prev) => !prev);
    }

    return (
        <DropDownTab onClick={toggleTab} $active={active}>
            <Tab>
                <QuestionDiv $active={active}>
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
