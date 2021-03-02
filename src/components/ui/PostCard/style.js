import styled, { keyframes } from 'styled-components'
import Image from "gatsby-image"


export const Wrapper = styled.div`
    width: 300px;
    height: 300px;

    margin: 30px auto;
    box-shadow: 0 3px 10px gray;
    box-sizing: border-box;

    
    &:hover{
        transform: scale(1.03,1.03);
        filter: brightness(95%);
    }
    transition: transform .1s linear;
`