import React from 'react'
import styled from 'styled-components'
import EmailBg from '../assets/images/email-2.jpg'
import {Button } from './Button'

const Email = () => {
    return (
      <EmailContainer>
          <EmailContent>
              <h1>Want to learn more or get in Contact with me?</h1>
              <p>Connect with me below!</p>
              <form action = '#'>
                  <FormWrap>
                      <label htmlFor ="email">
                      <input type= "email" placeholder= "Enter your email" id= "email"/>
                      </label>
                      <Button>Contact Me</Button>
                  </FormWrap>
              </form>
          </EmailContent>
      </EmailContainer>
    )
}

export default Email

const EmailContainer = styled.div ``
const EmailContent = styled.div ``
const FormWrap = styled.div ``
