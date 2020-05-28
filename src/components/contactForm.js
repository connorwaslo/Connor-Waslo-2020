import React, { useState } from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import { minDevice } from "../utils/devices"
import { Button } from "semantic-ui-react"

const FormInput = styled.input`
  background: ${({ theme }) => theme.palette.backgrounds.input};
  border: none;
  border-radius: 4px;
  width: 100%;
  height: ${({ theme }) => theme.spacing(12)};
  padding: ${({ theme }) => theme.spacing(4)};
  margin: ${({ theme }) => theme.spacing(2)} 0 ${({ theme }) => theme.spacing(6)} 0;
  
  &&:focus {
    outline: none;
  }
`

const FormLabel = styled.label`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.palette.text.main};
  
  @media ${minDevice.laptopL} {
    font-size: 16px;
    line-height: 18px;
  }
`

const SubmitButton = styled(Button)`
  &&& {
    color: ${({ theme }) => theme.palette.text.white};
    background: ${({ theme }) => theme.palette.accents.purple};
  }
`

function ContactForm() {
  const [state, setState] = useState({})

  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate('/success'))
      .catch((error) => alert(error))
  }

  return (
    <form name="Contact Form" method="post" data-netlify="true" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="Contact Form" />

      <FormLabel>Name</FormLabel>
      <FormInput type="text" name="name" onChange={handleChange}/>

      <FormLabel>Email</FormLabel>
      <FormInput type="email" name="email" onChange={handleChange}/>

      <FormLabel>Message</FormLabel>
      <FormInput name="message" onChange={handleChange}/>

      <SubmitButton type="submit">Send</SubmitButton>
    </form>
  )
}

export default ContactForm