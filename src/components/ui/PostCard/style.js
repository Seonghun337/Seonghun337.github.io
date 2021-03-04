import styled, { keyframes } from 'styled-components'
import Image from "gatsby-image"


export const Wrapper = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 17px;
    overflow: hidden;

    
    margin: 30px auto;
    box-shadow: 0 3px 10px gray;
    box-sizing: border-box;

    
    &:hover{
        transform: scale(1.2,1.2);//1.03
        filter: brightness(95%);
    }
    transition: transform .1s linear;
`

export const CoverBox = styled(Image)`
    height: 100px;
`

export const HeaderBox = styled.div`

`

export const TitleBox = styled.div`
    font-size: 15px;
    font-weight: 500;
    line-height: 21px;

    margin: 19px 23px;
`

export const DateBox = styled.div`
    font-size: 12px;
    font-weight: 100;

    margin-left: 23px;
    // margin-top: 30px;
    margin-bottom: 7px;
`

export const DescBox = styled.div`
    font-size: 12px;
    font-weight: 100;
    line-height: 16px;
    margin: 10px 23px;
`


export const ViewMore = styled.div`
    font-size: 10px;
    font-weight: 150;
    margin: auto 23px 23px 23px;
`