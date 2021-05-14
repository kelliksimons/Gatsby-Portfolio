import React, {useEffect} from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { FaRegLightbulb } from '@react-icons/all-files/fa/FaRegLightBulb'
import {IoMdCheckmarkCircleOutline} from '@react-icons/all-files/io/IoMdCheckmarkCircleOutline'
import { useStaticQuery,graphql } from 'gatsby'
import Aos from 'aos'
import "aos/dist/aos.css"

const Testimonials = () => { // graph ql query for testimonial images
    const data = useStaticQuery(graphql`  
    query {
  allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
	name: {in: ["testimonial-1", "testimonial-2"]}}) {
    edges {
      node {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`)

    
    return (
        <TestimonialsContainer id = "Projects">
            <TopLine>What's Next</TopLine>
            <Description>Current Projects</Description>
            <ContentWrapper>
                <ColumnOne data-aos = "flip-left">
                    <Testimonial data-aos = "fade">
                        <IoMdCheckmarkCircleOutline css={`
                        color: #3fffa8; 
                        font-size: 2rem; 
                        margin-bottom: 1rem;`}/>
                        <h3>React Portfolio Revisioning</h3>
                        <p>
                        {" "}
                        This is an on-going multi-phase project.<br/>
                        My portfolio is an on-going learning environment for myself to test out and learn
                        new languages & frameworks.<br/>
                        Stage 1: Create a portfolio utilizing an html template & deploy on github.io.<br/>
                        Stage 2: Utilize bootstrap and react for design & optimization to enhance portfolio and deploy via heroku.<br/>
                        Current Stage: Utilize React,Gatsby,GraphQL,Styled Components,Animations and more to create a portfolio that brings my background & passion to view.</p>
                    </Testimonial>
                    <Testimonial data-aos = "fade">
                        <FaRegLightbulb css={`
                        color: #f9b19b; 
                        font-size: 2rem; 
                        margin-bottom: 1rem;`}/>
                        <h3>Music-Share</h3>
                        <p>"Utilize Youtube API and Spotify API to create a web application that implements both on the same browser,
                        allowing users to send linked playlists to friends."</p>
                    </Testimonial>
                </ColumnOne>
                <ColumnTwo data-aos = "flip-left">
                    {data.allFile.edges.map((image,key) => (  //adding graph ql data to col two

                    <Images key = {key} fluid = {image.node.childImageSharp.fluid}/> // adding image

                    ))}

                </ColumnTwo>
            </ContentWrapper>
        </TestimonialsContainer>
    )
}

export default Testimonials

const TestimonialsContainer = styled.div`
width: 100%;
background: #121212;
color: #fff;
padding: 5rem calc((100vw - 1300px) / 2);
height: 100%;

`
const TopLine = styled.p`
color: #077bf1;
font-size: 1rem;
padding-left: 2rem;
margin-bottom: 0.75rem;

`
const Description = styled.p`
text-align: start;
padding-left: 2rem;
margin-bottom: 4rem;
font-size: clamp(1.5rem, 5vw, 2rem);
font-weight: bold;
`
const ContentWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
padding: 0 2rem;

@media and screen(max-width: 768px){
    grid-template-columns: 1fr;
}
`
const ColumnOne = styled.div`
display: grid;
grid-template-rows: 1fr 1fr;

`
const Testimonial = styled.div`
padding-top: 1rem;
padding-right: 2rem;

h3{
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
    
}
p{
    color: #fff;
}
`
const ColumnTwo = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
margin-top: 2rem;
grid-gap: 10px;

@media screen and (max-width: 500px){
    grid-template-columns: 1fr;
}
`

const Images = styled(Img)`
border-radius: 10px;
height: 100%;
`