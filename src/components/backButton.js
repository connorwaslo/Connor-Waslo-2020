import React from 'react'
import styled from 'styled-components'
import theme from "../styles/theme"
import { navigate } from "../../.cache/gatsby-browser-entry"

const BackContainer = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.spacing(4)};
  left: ${({ theme }) => theme.spacing(2)};
`

const Button = styled.button`
  background: ${({ theme }) => theme.palette.accents.purple};
  outline: none;
  border: none;
  border-radius: 50%;
  text-align: center;
  align-items: center;
  width: ${({ theme }) => theme.spacing(8)};
  height: ${({ theme }) => theme.spacing(8)};
  box-shadow: 0 8px 5px -4px rgba(0,0,0,0.55);
  
  &:hover {
    cursor: pointer;
  }
`

const BackArrow = styled.p`
  color: ${({ theme }) => theme.palette.text.white};
  font-size: ${({ theme }) => theme.spacing(5)};
  margin: auto 0;
`

function BackButton({ anchor }) {
  return (
    <BackContainer>
      <Button onClick={() => navigate(anchor)}>
        <BackArrow>{'<'}</BackArrow>
      </Button>
    </BackContainer>
  )
}

export default BackButton