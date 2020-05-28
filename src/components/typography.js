import styled from 'styled-components'
import { minDevice } from "../utils/devices"

export const MainTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size; 36px;
  line-height: 44px;
  color: ${props => props.color ? props.color : props.theme.palette.text.main};
  margin: 0;
  
  @media ${minDevice.tablet} {
    font-size: 44px;
    line-height: 60px;
  }
`