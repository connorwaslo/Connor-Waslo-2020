import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'

const BackContainer = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.spacing(4)};
  left: ${({ theme }) => theme.spacing(1)};
`

const Button = styled.button`
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  
  &:hover {
    cursor: pointer;
  }
`

const BackArrow = styled.img`
  width: ${({ theme }) => theme.spacing(5)};
`

function BackButton({ anchor }) {
  return (
    <BackContainer>
      <Button onClick={() => navigate(anchor)}>
        <BackArrow src={require('../images/misc/back_arrow.svg')} alt='back button'/>
      </Button>
    </BackContainer>
  )
}

export default BackButton