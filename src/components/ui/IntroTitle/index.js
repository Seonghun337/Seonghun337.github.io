import React, { Component } from 'react'
import styled from 'styled-components';

const Title = styled.h1
`
    font-size: 20px;
    font-weight: 400;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 30px auto;
`



class IntroTitle extends Component{
    render(){
        return(
            <Title>
                {this.props.title}
            </Title>
        );
    }
}

export default IntroTitle;
