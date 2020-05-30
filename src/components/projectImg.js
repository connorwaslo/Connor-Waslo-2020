import React from 'react'
import styled from 'styled-components'
import { minDevice } from "../utils/devices"

const Container = styled.div`
  text-align: center;
  margin: ${({ theme }) => theme.spacing(12)} 0;
`

const Picture = styled.img`
  max-width: 100%;
  
  @media ${minDevice.md} {
    max-width: 70%;
  }
`

const Caption = styled.h6`
  text-align: center;
  font-style: italic;
`

function ProjectImg({ src, alt, caption, vertical, style }) {
  return (
    <Container>
      <Picture src={src} alt={alt} style={style}/>
      <Caption>{caption}</Caption>
    </Container>
  )
}

export default ProjectImg