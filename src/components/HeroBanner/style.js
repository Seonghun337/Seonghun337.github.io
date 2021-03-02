// import React from 'react';
import styled from 'styled-components';

export const Background = styled.div
`
    background-color: #F7FAFC;
    width: 100%;
    
    margin: 0px;
    padding: 0px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled.div
`
    @media (max-width: ${({theme}) => theme.size.validWidth}px;){
        width: auto;
    }
    
`;

export const Carousel = styled.div
`
    height: 350px;    
    margin-top: 80px;
    margin-bottom: 60px;

    overflow: hidden;

`

export const Banner = styled.div
`

`


// export const NavItem = styled.div
// `
//     display:inline;
//     padding-left:30px;

// `

export const Saparator = styled.h2
`
    position: relative;
    width: 0.5rem;
    height: 2rem;
    margin: -0.5rem auto 1.5rem;

    // margin-block-start: 0.83em;
    // margin-block-end: 0.83em;
    // margin-inline-start: 0px;
    // margin-inline-end: 0px;

    &:before {
        content: "";
        background-color: black;
        height:100%;
        width:1px;
        position: absolute;
        left: 0px;
    }
    &:after {
        content: "";
        background-color: black;
        height: 1.5rem;
        width: 1px;
        position: absolute;
        margin-left: 0.25rem;

        // box-sizing: border-box;
        // border: 0 solid #000000;
    }

`