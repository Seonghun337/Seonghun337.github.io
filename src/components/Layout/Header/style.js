// import React from 'react';
import styled from 'styled-components';

export const NavBar = styled.div
`
    // border: 1px solid;
    width: 100%;
    // width: 720px;
    height: 100px;

    margin: 0px;
    font-size:15px;

    display: flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items:flex-end;
`;


export const NavItem = styled.div
`
    display:inline;
    padding-left:30px;

    &:hover {
        text-decoration: underline;
    }    
`

export const Wrapper = styled.div
`
background-color: #F7FAFC;
// border: 1px solid;

// width: 720px;
/*    margin-top:0px;*/
margin: 0px auto;
padding: 0px;

display: flex;
flex-direction: column;
align-items: center;
`
