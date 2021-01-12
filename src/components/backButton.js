import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'

const BackContainer = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.spacing(4)};
  left: ${({ theme }) => theme.spacing(4)};
`

const Button = styled.button`
  background: transparent;
  outline: none;
  border: none;
  padding: 0 ${({ theme }) => theme.spacing(8)} 0 0;
  margin: 0;
  
  &:hover {
    cursor: pointer;
  }
`

const BackArrow = styled.img`
  width: ${({ theme }) => theme.spacing(5)};
  margin-right: ${({ theme }) => theme.spacing(1)};
`

function BackButton({ anchor }) {
  return (
    <BackContainer>
      <Button onClick={() => navigate(anchor)} style={{ display: 'flex', flexDirection: 'row' }}>
        <BackArrow src={require('../images/misc/back_arrow.svg')} alt='back button'/>
        Back
      </Button>
    </BackContainer>
  )
}

export default BackButton