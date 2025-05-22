import styled from 'styled-components';

const Card = styled.div`
    width: 20vw;
    min-height: 45vh;
    background: white;
    border-radius: 8px;
`

const GoalContent = styled.div`
    padding: 2vh 2vw;
`

const Goal = styled.h1`
    color: black;
    font-size: calc(10px + 3vh);
    font-weight: 550;
    font-family: Maragsa, sans-serif;
    padding-bottom: 2vh;
`;


const Description = styled.h1`
    color: black;
    font-size: calc(2px + 2vh);
    font-weight: normal;
    font-family: "instrument sans", sans-serif;
    
    
`

export default function GoalCard({ goal, description }: { goal: string; description: string }) {
    return (
        <Card>
            <div className="h-3 bg-[#E7DAC3] rounded-t-lg"></div>
            <GoalContent>
                <Goal>{goal}</Goal>
                <Description>{description}</Description>
            </GoalContent>

        </Card>
    )

}