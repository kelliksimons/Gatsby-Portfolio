import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { FaRegLightbulb } from 'react-icons/fa'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'

const Testimonials = () => {
    return (
        <TestimonialsContainer>
            <TopLine>Testimonials</TopLine>
            <Description>Previous Projects</Description>
            <ContentWrapper>
                <ColumnOne>
                    <Testimonial>
                        <IoMdCheckmarkCircleOutline/>
                        <h3>React Portfolio</h3>
                        <p>"In this project I translated a HTML template into a React application. Deployed via Github"</p>
                    </Testimonial>
                    <Testimonial>
                        <FaRegLightbulb/>
                        <h3>Music-Share</h3>
                        <p>"Utilize Youtube API and Spotify API to create a web application that implements both on the same browser,
                        allowing users to send linked playlists to friends."</p>
                    </Testimonial>
                </ColumnOne>
                <ColumnTwo>
                    image
                </ColumnTwo>
            </ContentWrapper>
        </TestimonialsContainer>
    )
}

export default Testimonials

const TopLine = styled.div``
const TestimonialsContainer = styled.div``
const Description = styled.div``
const ContentWrapper = styled.div``
const ColumnOne = styled.div``
const Testimonial = styled.div``
const ColumnTwo = styled.div``