import styled from 'styled-components'
import { Link } from 'gatsby'
import { minDevice } from "../utils/devices"

export const MainTitle = styled.h1`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size; 36px;
  line-height: 44px;
  color: ${props => props.color ? props.color : 'inherit'};
  margin: 0;
  word-wrap: normal;
  
  
  @media ${minDevice.lg} {
    font-size: 44px;
    line-height: 60px;
  }
`

export const AboutText = styled.h3`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  color: ${props => props.color ? props.color : 'inherit'};
  margin-bottom: ${({ theme }) => theme.spacing(8)};
   
  @media ${minDevice.md} {
    font-size: 21px;
    line-height: 26px;
  }
`

export const ProjectTitle = styled.h4`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 24px;
  color: ${props => props.color ? props.color : 'inherit'};
   
  @media ${minDevice.md} {
    font-size: 24px;
    line-height: 28px;
  }
`

export const ProjectBody = styled.p`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: ${({ color, theme }) => color ? color : theme.palette.text.detailLight};
   
  @media ${minDevice.md} {
    font-size: 18px;
    line-height: 21px;
  }
`

export const ProjectRef = styled.a.attrs(() => ({
  target: '_blank'
}))`
  font-family: Poppins, sans-serif;
  text-decoration: underline;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: ${({ color, theme }) => color ? color : theme.palette.text.main};
   
  @media ${minDevice.md} {
    font-size: 18px;
    line-height: 21px;
  }
  
  &&:hover {
    color: ${({ color, theme }) => color ? color : theme.palette.text.main};
    text-decoration: underline;
  }
`

export const ProjectLink = styled(Link).attrs(() => ({
  target: '_blank'
}))`
  font-family: Poppins, sans-serif;
  text-decoration: underline;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: ${({ color, theme }) => color ? color : theme.palette.text.main};
   
  @media ${minDevice.md} {
    font-size: 18px;
    line-height: 21px;
  }
  
  &&:hover {
    color: ${({ color, theme }) => color ? color : theme.palette.text.main};
    text-decoration: underline;
  }
`

export const BlogHeader = styled.h2`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size; 28px;
  line-height: 34px;
  color: ${props => props.color ? props.color : 'inherit'};  
  
  @media ${minDevice.lg} {
    font-size: 32px;
    line-height: 36PX;
  }
`

export const BlogText = styled.p`
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size; 18px;
  line-height: 24px;
  color: ${props => props.color ? props.color : 'inherit'};
  
  
  @media ${minDevice.lg} {
    font-size: 21px;
    line-height: 28px;
  }
`