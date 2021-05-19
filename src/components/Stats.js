import React, {useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {StatsData} from '../data/StatsData'
import Aos from 'aos'
import "aos/dist/aos.css"


const Stats = () => {

    return (
        <StatsContainer id = "Next">
            <Heading>Professional Experience & Socials</Heading>
            <Wrapper data-aos = "fade-up">
            {StatsData.map((item,index)=>{
                return(
                <StatsBox key = {index}>
                    <Icon>{item.icon}</Icon>
                    <Title>{item.title}</Title>
                    <Description>{item.desc}</Description>
                    <NavLink to= {item.link}>{item.link}</NavLink>
                </StatsBox>

                )
            })}

            </Wrapper>
        </StatsContainer>
    )
}

export default Stats

const StatsContainer = styled.div`
width: 100%;
background: #121212;
color: #fff;
display: flex;
flex-direction: column;
justify-content: center;
padding: 4rem calc((100vw - 1300px) / 2);

`
const Heading = styled.div`
text-align: start;
font-size: clamp(1.5rem, 5vw, 2rem);
margin-bottom: 3rem;
padding: 0 2rem;

`
const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 10px;

@media screen and (max-width: 768px){

    grid-template-columns: 1fr;
   
    
}

@media screen and (max-width: 500px){

    
}
`

const StatsBox = styled.div `
height: 100%;
width: 100%;
padding: 2rem;

`
const Icon = styled.div `
font-size: 3rem;
margin-bottom: 1rem;

`
const Title = styled.p `
font-size: clamp(1rem, 2.5vw, 1.5rem);
margin-bottom: 0.5rem;
`
const Description = styled.p `

`
const NavLink = styled(Link)`
cursor: pointer;
`
