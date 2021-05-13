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
            fluid(quality:100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  file(relativePath: {eq: "image-1.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
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
              

                {/* <Button 
                to="/projects" 
                primary="true" 
                round="true" 
                css={`
                    position: absolute;
                    top: 420px;
                    font-size: 14px; `}>
                    
            {item.node.button}
            </Button> */}

            </SkillInfo>
            </SkillCard>
            
        )
    })    
    return aboutArray

}


    return (
        <SkillsContainer id = "About">
            <SkillsHeading>{heading}</SkillsHeading>
                <HeaderImg fluid={data.file.childImageSharp.fluid}/>
            <TextWrap>
                <SkillTitle data-aos = "fade-down">My professional background is in Software Development 
                and Project Management. I also enjoy Gaming, Traveling and Drone Videography. 
                Web development has been my focus & passion and 
                I enjoy learning & building using the latest technologies. I enjoy providing digital solutions. </SkillTitle>
                </TextWrap>
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
grid-template-columns: repeat(10, 1fr);
grid-gap: 2px;
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
width: 100px;
/*height: 500px;*/
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
font-size: clamp(1.2rem, 5vw, 3rem);
text-align: center;
margin-bottom: 5rem;
color: #fff;


`

const SkillTitle = styled.div `
font-weight: 400;
font-size: 1rem;
margin-left: 0.5rem;

`

const HeaderImg = styled(Img)`
height:25%;
max-width: 25%;
border-radius: 10px;
margin-left: 450px;
margin-bottom: 100px;
align-items: center;
`