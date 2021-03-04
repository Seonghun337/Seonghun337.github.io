import styled from 'styled-components';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import * as Icon from 'react-bootstrap-icons';
export const Wrapper = styled.div`


`

export const NavBar = styled.div
`
    width: 100%;

    padding-top: 25px;
    padding-bottom:15px;


    display: flex;
    flex-flow: row wrap;
    justify-content:space-between;


`;

export const NavItemWrapper = styled.div`

    & a {
        margin-left:52px;
    }

    @media screen and (max-width: ${({theme}) => theme.size.validWidth}px){
        width:100%;

        display:flex;

        flex-direction:column;
        align-items:flex-start;


        & a {
            margin: 6px 0;
            margin-left: 35px;
        }

        ${({ open }) => !open && `display:none`};
    }
`

export const NavItem = styled(Link)
`
    font-size:16px;
    font-weight:300;
    display:inline-block;

    margin-bottom:8px;


    vertical-align: middle;
    transform: perspective(1px) translateZ(0);

    & ~ .active:before {
        right:0;
    }

    

    &:before{
        content: "";
        position:absolute;
        left: 0;
        right: 100%;


        bottom: -5px;
        background: #31C7FF;
        height: 2px;

        transition-property: right;
        transition-duration: 0.3s;
        transition-timing-function: ease-out;
    }

    &:hover:before, &:focus:before, &:active:before{
        right: 0;
    }
`

export const ToogleButton = styled(Icon.List)`
    
    @media screen and (min-width: ${({theme}) => theme.size.validWidth}px){
        display:none;
    }

    margin-right: 15px;
    width: 30px;

    height: 30px;

`


export const Logo = styled(Image)`

    width: 150px;
    margin-left: 15px;

`
