import React, { Component } from 'react'
import * as Styled from "./style";
import Container from "../../ui/Container"

class Header extends Component{
    render(){
        return(
            <Container>
                <Styled.NavBar>
                    <Styled.NavItem>About</Styled.NavItem>
                    <Styled.NavItem>Work</Styled.NavItem>
                    <Styled.NavItem>Blog</Styled.NavItem>
                </Styled.NavBar>
            </Container>
        );
    }
}

export default Header