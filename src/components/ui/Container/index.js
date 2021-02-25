import React, { Component } from 'react'
import styled from 'styled-components';

export const StyledContainer = styled.div
`
    width: 100%;
    max-width: 720px;

`;

class Container extends Component{
    render(){
        return(//props 받아서 배경색 지정
                <StyledContainer>
                    {this.props.children}
                </StyledContainer>
        );
    }
}

export default Container;
