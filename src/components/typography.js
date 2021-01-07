import styled from 'styled-components'
import { Link } from 'gatsby'
import { minDevice } from "../utils/devices"

export const MainTitle = styled.h1`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  color: ${props => props.color ? props.color : 'inherit'};
  margin: 0;
  word-wrap: normal;
  
  
  @media ${minDevice.md} {
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
  font-size: 24px;
  line-height: 28px;
  margin: ${({ theme }) => theme.spacing(2)} 0;
  color: ${props => props.color ? props.color : 'inherit'};
   
  @media ${minDevice.sm} {
    font-size: 28px;
    line-height: 32px;
  }
  
  @media ${minDevice.md} {
    font-size: 30px;
    line-height: 34px;
  }
`

export const ProjectBody = styled.p`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  margin: ${({ theme }) => theme.spacing(2)} 0;
  color: ${({ color, theme }) => color ? color : theme.palette.text.detailLight};
`

export const ProjectRef = styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noreferrer noopener'
}))`
  font-family: Poppins, sans-serif;
  text-decoration: underline;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: ${({ color, theme }) => color ? color : theme.palette.text.main};
  
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
  font-size: 18px;
  line-height: 21px;
  color: ${({ color, theme }) => color ? color : theme.palette.text.main};
  
  &&:hover {
    color: ${({ color, theme }) => color ? color : theme.palette.text.main};
    text-decoration: underline;
  }
`

export const BlogHeader = styled.h2`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;
  margin-top: ${({ theme }) => theme.spacing(8)};
  color: ${props => props.color ? props.color : 'inherit'};  
  
  @media ${minDevice.lg} {
    font-size: 32px;
    line-height: 36PX;
  }
`

export const BlogSubtitle = styled.h3`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 38px;
  margin-top: ${({ theme }) => theme.spacing(8)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  color: ${props => props.color ? props.color : 'inherit'};  
  
  @media ${minDevice.lg} {
    font-size: 28px;
    line-height: 32PX;
  }
`

export const BlogText = styled.p`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: ${props => props.color ? props.color : 'inherit'};
  
  
  @media ${minDevice.lg} {
    font-size: 21px;
    line-height: 28px;
  }
`

export const InlineLink = styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noreferrer noopener'
}))`
  margin: 0;
  // color: white;
  color: ${({ theme }) => theme.palette.accents.purple};
  
  &:hover {
    color: ${({ theme }) => theme.palette.accents.purple};
  }
  
  &:active {
    color: ${({ theme }) => theme.palette.accents.purple};
  }
  
  &:visited {
    color: ${({ theme }) => theme.palette.accents.purple};
  }
`

export const InlineRef = styled(Link).attrs(() => ({
  target: '_blank',
  rel: 'noreferrer noopener'
}))`
  margin: 0;
  // color: white;
  color: ${({ theme }) => theme.palette.accents.purple};
  
  &:hover {
    color: ${({ theme }) => theme.palette.accents.purple};
  }
  
  &:active {
    color: ${({ theme }) => theme.palette.accents.purple};
  }
  
  &:visited {
    color: ${({ theme }) => theme.palette.accents.purple};
  }
`