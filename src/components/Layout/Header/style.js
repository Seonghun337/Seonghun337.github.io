import styled from 'styled-components';
import { Link } from 'gatsby';

export const NavBar = styled.div
`

    width: 100%;
    height: 90px;

    margin: 0;


    display: flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items:flex-end;

    padding-bottom:8px;
`;


export const NavItem = styled(Link)
`
    font-size:16px;
    display:inline-block;
    margin-left:52px;
    margin-bottom:8px;


    vertical-align: middle;
    transform: perspective(1px) translateZ(0);
    // box-shadow: 0 0 1px rgba(0,0,0,0);
    // position: relative;

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


// export const Logo = styled()