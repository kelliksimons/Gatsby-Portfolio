import React from 'react'
import styled from 'styled-components'
import EmailBg from '../assets/images/email-2.jpg'
import {Button } from './Button'
import Aos from 'aos'
import "aos/dist/aos.css"
import emailjs from "emailjs-com"

const Email = () => {

    function sendEmail(e){
        e.preventDefault();
    
    emailjs.sendForm('service_h2dxl0k','template_0qk352p',e.target,'user_gGnN27wCtpCPjmXO9A5bb')
        .then((result)=> {
            console.log(result.text);
        }, (error) =>{
            console.log(error.text);
        
        });
        e.target.reset()
    }
    return (
      <EmailContainer id = "Contact">
          <EmailContent data-aos="slide-up">
              <h1>Want to learn more or get in Contact with me?</h1>
              <p>Connect with me below!</p>
              <form onSubmit = {sendEmail}>
                  <FormWrap>
                      <label htmlFor ="email">
                      <input type= "email" placeholder= "Enter your email address" id= "email" name ="email"/>
                      </label>
                      <textarea cols="30" rows= "8" placeholder= "Write something..." id= "message" name = "message"></textarea>
                      <Button as ="button"
                      type= "submit" 
                      primary="true" 
                      round= "true" 
                      css={`
                      height: 48px;
                      @media screen and (max-width: 768px){
                          width: 100%
                          min-width: 350px;
                       }   
                      @media screen and (max-width: 400px){
                          width: 100%
                          min-width: 250px;
                      } `}>Submit</Button>
                  </FormWrap>
              </form>
          </EmailContent>
      </EmailContainer>
    )
}

export default Email

const EmailContainer = styled.div `
background: linear-gradient(180deg,
rgba(0,0,0,0.5)0%,
rgba(0,0,0,0.5)35%,
rgba(0,0,0,0.1)100%),
url(${EmailBg}) no-repeat center;
background-size: cover;
height:450px;
width:100%;
padding:5rem calc((100vw - 1300px) / 2);
color: #fff;
display: flex;
justify-content: center;
align-items: center; 
`
const EmailContent = styled.div `
display: flex;
flex-direction: column;
align-items: center;

h1{
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
}

p{
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
}

form{ 
    z-index: 10;
}
`
const FormWrap = styled.div `
align-items: center;
button:active{
    transform: translateY(10px);
    background-color: green;
   
}

input,textarea{
    padding: 24px;
    outline: none;
    width: 75%;
    height: 48px;
    margin-top: 6px;
    margin-bottom: 16px;
    border-radius: 50px;
    border: none;
    margin-right: 1rem;
    resize: vertical;



 /* }
textarea{
    padding: 1rem 1.5rem;
    outline: none;
    width: 50%;
    height: 200px;
    border-radius: 50px;
    border: none;
    margin-left: 5rem;
    

} */
@media screen and(max-width: 768px){
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    input,textarea{
        margin-bottom: 1rem;
        width: 100%;
        margin-right: 0;
    }

}


`
