import React from 'react'
import styled from 'styled-components'
import { size, minDevice, maxDevice } from '../utils/devices'
import theme from '../styles/theme'

import { Responsive } from 'semantic-ui-react'

export const Padding = styled.div`
  padding: ${props => props.vertical}  ${props => props.horizontal};
`

export const TitleContainer = styled.div`
  @media ${maxDevice.tablet} {
    padding: ${({ theme }) => theme.spacing(20)} 0;
  } 
  
  padding: ${({ theme }) => theme.spacing(12)} 0;

  @media ${minDevice.laptop} {
    max-width: 70%;
  }
`

export const ContentContainer = styled.div`
  @media ${maxDevice.tablet - 1} {
    padding: ${({ theme }) => theme.spacing(4)};
  }
  
  @media ${minDevice.tablet} {
    padding: ${({ theme }) => theme.spacing(16)} ${({ theme }) => theme.spacing(30)};
  }
`

const SwooshContainer = styled.div`
  margin: 0;
  padding: 0;
  background: ${({ swooshColor }) => `linear-gradient(transparent 75%, ${swooshColor} 25%)`};
`

export const SectionContainer = ({ swoosh, swooshColor, background, children }) => {
  function renderSwoosh() {
    return (
      <SwooshContainer swooshColor={swooshColor}>
        <svg fill={swooshColor} opacity="1" width="100%" height="100" viewBox="0 0 4.66666 0.333331"
             preserveAspectRatio="none" transform="scale(-1, 1)">
          <path
            d="M-7.87402e-006 0.0148858l0.00234646 0c0.052689,0.0154094 0.554437,0.154539 1.51807,0.166524l0.267925 0c0.0227165,-0.00026378 0.0456102,-0.000582677 0.0687992,-0.001 1.1559,-0.0208465 2.34191,-0.147224 2.79148,-0.165524l0.0180591 0 0 0.166661 -7.87402e-006 0 0 0.151783 -4.66666 0 0 -0.151783 -7.87402e-006 0 0 -0.166661z"></path>
        </svg>
      </SwooshContainer>
    )
  }

  return (
    <div style={{ background: background}}>
      <Responsive maxWidth={size.laptop - 1}>
        <Padding vertical={theme.spacing(12)} horizontal={0}>
          {children}
        </Padding>
      </Responsive>
      <Responsive minWidth={size.laptop}>
        {children}
        {swoosh && renderSwoosh()}
      </Responsive>
    </div>
  )
}

export const BlogContainer = styled.div`
  @media ${maxDevice.tablet - 1} {
    padding: ${({ theme }) => theme.spacing(12)} ${({ theme }) => theme.spacing(24)};
  }
  
  @media ${minDevice.tablet} {
    padding: ${({ theme }) => theme.spacing(16)} ${({ theme }) => theme.spacing(32)};
  }
`