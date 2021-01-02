import React from 'react'
import styled from 'styled-components'
import { minDevice, maxDevice } from '../utils/devices'

export const Padding = styled.div`
  padding: ${props => props.vertical}  ${props => props.horizontal};
`

export const TitleContainer = styled.div`
  @media ${maxDevice.md} {
    padding: ${({ theme }) => theme.spacing(20)} 0;
  } 
  
  padding: ${({ theme }) => theme.spacing(12)} 0;

  @media ${minDevice.lg} {
    max-width: 70%;
  }
`

export const ContentContainer = styled.div`
  margin: -0.1rem;

  @media ${maxDevice.md} {
    padding: ${({ theme }) => theme.spacing(8)};
    margin: 0;
  }
  
  @media ${minDevice.md} {
    padding: ${({ theme }) => theme.spacing(16)} ${({ theme }) => theme.spacing(30)};
  }
`

export const SwooshContainer = styled.div`
  margin: -0.5rem;
  padding: 0;
  
  @media ${maxDevice.lg} {
    margin: -0.75rem;
  }
`

export const SectionContainer = ({ background, children }) => {
  return (
    <div style={{ background: background, padding: 0, margin: 0 }}>
      {children}
    </div>
  )
}

export const BlogContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(12)} ${({ theme }) => theme.spacing(6)};
  
  @media ${minDevice.sm} {
    padding: ${({ theme }) => theme.spacing(12)} ${({ theme }) => theme.spacing(8)};
  }
  
  @media ${minDevice.md} {
    padding: ${({ theme }) => theme.spacing(12)} ${({ theme }) => theme.spacing(16)};
  }
  
  @media ${minDevice.lg} {
    padding: ${({ theme }) => theme.spacing(12)} ${({ theme }) => theme.spacing(28)};
  }
  
  @media ${minDevice.xl} {
    padding: ${({ theme }) => theme.spacing(12)} ${({ theme }) => theme.spacing(64)};
  }
`