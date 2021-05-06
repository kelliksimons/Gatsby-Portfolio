import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-plugin-image'

const About = () => {
    const data = useStaticQuery(graphql`
      query AboutQuery {
        allAboutJson {
             edges {
                 node {
                alt
                    button
                    name
                    img {
                    childrenImageSharp {
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
            <div key={index}> 
                <Img src = {item.node.img.childImageSharp.fluid.src}
                fluid ={item.node.img.childImageSharp.fluid}/>
            </div>
            
        )
    })    
    return aboutArray

}


    return (
        <SkillsContainer>
            <SkillsHeading>Heading</SkillsHeading>
            <SkillsWrapper>{getAbout(data)}</SkillsWrapper>
        </SkillsContainer>
    )
    }

export default About

const SkillsContainer = styled.div`
min-height: 100vh;
padding: 5rem calc((100vw-1300px)/2);
background:red;
color: #fff;

`
const SkillsHeading = styled.div `
font-size: clamp(1.2rem,5vw,3rem);
text-align: center;
margin-bottom: 5rem;
color: #000;

` 
const SkillsWrapper = styled.div `

`