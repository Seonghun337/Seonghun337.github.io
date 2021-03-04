import styled, { keyframes } from 'styled-components'
import Image from "gatsby-image"


export const Wrapper = styled.div`
    width: 600px;
    @media screen and (max-width: ${({theme}) => theme.size.validWidth}px){
        width: 330px;
    }
    height: 300px;
    display: flex;

    padding: 25px 30px;
    background-color: white;

    margin:0 auto;
    box-shadow: 0 3px 10px gray;
    box-sizing: border-box;

    
    ${
        (props) => {
            if(props.hoverActive==true){
                return `
                    &:hover{
                        transform: scale(1.03,1.03);
                        filter: brightness(95%);
                    }
                    transition: transform .1s linear;
                
                `
            }
        }
    }


`

export const ThumbnailBox = styled(Image)`
    width: 50%;
    background-color: gray;

    @media screen and (max-width: ${({theme}) => theme.size.validWidth}px){
        display:none;
    }
`

export const CenterPadding = styled.div`
    width: 30px;
    height: 100%;

    @media screen and (max-width: ${({theme}) => theme.size.validWidth}px){
        display:none;
    }
`

export const ContentBox = styled.div`
    width: 50%;
    @media screen and (max-width: ${({theme}) => theme.size.validWidth}px){
        width: 100%;
    }
`

export const TitleBox = styled.div`
    font-size: 25px;
    font-weight: 600;
    margin: 0;
`

export const TeamBox = styled.div`
    font-size: 12px;
    font-weight: 150;
    text-align: right;
`

export const DescBox = styled.div`
    font-size: 12px;
    font-weight: 100;
    margin: 40px 0 16px 0;
    line-height: 19px;
`

export const StackBox = styled.div`
    font-size: 12px;
    font-weight: 150;
    margin: 16px auto;
`


const translateLoop = keyframes`
    0% {
        transform: translate(0px);
    }
    50% {
        transform: translate(4px);
    }
    100% {
        transform: translate(0px);
    }
`

export const ViewMore = styled.div`
    width: 100%;
    font-size: 17px;
    margin-top: 40px;

    ${Wrapper}:hover & {
        animation: ${translateLoop} .7s 0s linear infinite;
    }
`
