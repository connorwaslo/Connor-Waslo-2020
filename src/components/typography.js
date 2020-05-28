import styled from 'styled-components'
import { minDevice } from "../utils/devices"

export const MainTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size; 36px;
  line-height: 44px;
  color: ${props => props.color ? props.color : 'inherit'};
  margin: 0;
  
  @media ${minDevice.tablet} {
    font-size: 44px;
    line-height: 60px;
  }
`

export const AboutText = styled.h3`
   font-style: normal;
   font-weight: normal;
   font-size: 18px;
   line-height: 26px;
   color: ${props => props.color ? props.color : 'inherit'};
   margin-bottom: ${({ theme }) => theme.spacing(8)};
   
   @media ${minDevice.tablet} {
    font-size: 21px;
    line-height: 26px;
  }
`