import React, { Component } from 'react'
// import * as Styled from './style';
import styled from 'styled-components';

const Wrapper = styled.div
`
    width: 100%;
    display: flex;
    // text-align: ${props => props.align}
    justify-content: ${props => props.isLeft? "flex-start" : "center"}
`

const OuterShape = styled.div
`
    
    width: 4px;
    height: 36px;
    border-left: 1px solid;

`
const InnerShape = styled.div
`
    width: 4px;
    height: 24px;
    border-right: 1px solid;
`

class Saparator extends Component{
    render(){
        return(
            <Wrapper isLeft={this.props.isLeft}>
                <OuterShape>
                    <InnerShape>

                    </InnerShape>
                </OuterShape>
            </Wrapper>
        );
    }
}

export default Saparator;
