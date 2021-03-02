import React, { Component } from 'react'
import styled from 'styled-components';

const Title = styled.h1
`
    font-size: 20px;
    font-weight: 400;
    width: 100%;
    display: flex;
    
    ${props => {
        if(!props.isLeft){
            return `
                justify-content: center;
            `;
        }
    }};
    margin: 30px auto;
`



class IntroTitle extends Component{
    render(){
        return(
            <Title isLeft={this.props.isLeft}>
                {this.props.title}
            </Title>
        );
    }
}

export default IntroTitle;
