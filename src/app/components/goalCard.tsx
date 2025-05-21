import styled from 'styled-components';

const Card = styled.div`
    width: 15vw;
    height: 35vh;
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
    font-family: Maragsa, Sans-Serif;
`

const Description = styled.h1`
    color: black;
    font-size: calc(5px + 2vh);
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