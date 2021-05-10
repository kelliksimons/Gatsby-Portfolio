import React, {useEffect} from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import { Button } from './Button'
import Aos from 'aos'
import "aos/dist/aos.css"

const About = ({heading}) => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    }, []);
    const data = useStaticQuery(graphql`
     query AboutQuery {
        allAboutJson {
            edges {
            node {
                alt
                button
                name
                img {
                childImageSharp {
                    fluid {
                    ...GatsbyImageSharpFluid
                    }
          }
        }
      }
    }
  }
}



        `)


function getAbout(data){
    const aboutArray = []
    data.allAboutJson.edges.forEach((item,index) => {
        aboutArray.push(
            <SkillCard key={index} data-aos="fade-left"> 
                <SkillImg 
                // src = {item.node.img.childImageSharp.fluid.src}
                alt = {item.node.alt}
                fluid = {item.node.img.childImageSharp.fluid}

                />
                <SkillInfo>
                <TextWrap>
                <SkillTitle data-aos = "fade-down">{item.node.name}</SkillTitle>
                </TextWrap>

                <Button 
                to="/projects" 
                primary="true" 
                round="true" 
                css={`
                    position: absolute;
                    top: 420px;
                    font-size: 14px; `}>
                    
            {item.node.button}
            </Button>

            </SkillInfo>
            </SkillCard>
            
        )
    })    
    return aboutArray

}


    return (
        <SkillsContainer>
            <SkillsHeading>{heading}</SkillsHeading>
            <SkillsWrapper>{getAbout(data)}</SkillsWrapper>
        </SkillsContainer>
    )
    }

export default About

const SkillsContainer = styled.div`
background: #121212;
min-height: 100vh;
padding: 5rem calc((100vw - 1300px) / 2);
color: #000;
`

const SkillsHeading = styled.div `
font-size: clamp(1.2rem, 5vw, 3rem);
text-align: center;
margin-bottom: 5rem;
color: #fff;
` 

const SkillsWrapper = styled.div `
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 10px;
justify-items: center;
padding: 0 2rem;

@media screen and (max-width: 1200px){
    grid-template-columns: 1fr 1fr;

}

@media screen and (max-width: 868px){
    grid-template-columns: 1fr;
}

`
const SkillCard = styled.div `
line-height: 2;
width: 100%;
height: 500px;
position: relative;
border-radius: 10px;
transition: 0.2 ease;


`
const SkillImg = styled(Img)`
height:100%;
max-width: 100%;
position: relative;
border-radius: 10px;
filter: brightness(70%);
transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

&:hover{
    filter: brightness(100%);
}

`
const SkillInfo = styled.div `
color:#fff;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0 2rem;

@media screen and(max-width: 280px){
    padding: 0 1rem;
}
`

const TextWrap = styled.div `
display: flex;
align-items: center;
position: absolute;
top: 375px;

`

const SkillTitle = styled.div `
font-weight: 400;
font-size: 1rem;
margin-left: 0.5rem;

`