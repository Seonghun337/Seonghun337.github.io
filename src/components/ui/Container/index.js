import React, { Component } from 'react'
import styled from 'styled-components';

export const StyledContainer = styled.div
`
    width: 100%;
    // max-width: 720px;
    max-width: ${({theme}) => theme.size.validWidth}px;
`;

export const Background = styled.div
`
    width: 100%;
    background: ${props => props.background? ({theme}) => theme.colors.background : ({theme}) => theme.colors.white };


    // border: 1px solid;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 420px){
            width: auto;
    }
`

class Container extends Component{
    render(){
        return(//props 받아서 배경색 지정
            <Background background={this.props.background}>
                <StyledContainer>
                    {this.props.children}
                </StyledContainer>
            </Background>
        );
    }
}

export default Container;
