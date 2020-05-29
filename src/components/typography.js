import styled from 'styled-components'
import { Link } from 'gatsby'
import { minDevice } from "../utils/devices"

export const MainTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size; 36px;
  line-height: 44px;
  color: ${props => props.color ? props.color : 'inherit'};
  margin: 0;
  word-wrap: normal;
  
  
  @media ${minDevice.laptop} {
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

export const ProjectTitle = styled.h4`
   font-style: normal;
   font-weight: bold;
   font-size: 21px;
   line-height: 24px;
   color: ${props => props.color ? props.color : 'inherit'};
   
   @media ${minDevice.tablet} {
    font-size: 24px;
    line-height: 28px;
  }
`

export const ProjectBody = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: ${({ color, theme }) => color ? color : theme.palette.text.detailLight};
   
  @media ${minDevice.tablet} {
    font-size: 18px;
    line-height: 21px;
  }
`

export const ProjectLink = styled.a.attrs(() => ({
  target: '_blank'
}))`
  text-decoration: underline;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: ${({ color, theme }) => color ? color : theme.palette.text.main};
   
  @media ${minDevice.tablet} {
    font-size: 18px;
    line-height: 21px;
  }
  
  &&:hover {
    color: ${({ color, theme }) => color ? color : theme.palette.text.main};
    text-decoration: underline;
  }
`