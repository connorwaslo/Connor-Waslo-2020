import styled from 'styled-components'
import { minDevice, maxDevice } from '../utils/devices'

export const TitleContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(20)} 0;

  @media ${minDevice.laptop} {
    max-width: 85%;
  }
`

export const ContentContainer = styled.div`
  @media ${maxDevice.tablet} {
    padding: ${({ theme }) => theme.spacing(4)};
  }
  
  @media ${minDevice.tablet} {
    padding: ${({ theme }) => theme.spacing(16)} ${({ theme }) => theme.spacing(30)};
  }
`