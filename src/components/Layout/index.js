import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
// import styledComponentsCjs from 'styled-components';
// import styled from "styled-components";
// import * as Styled from "./style";
import styled from 'styled-components';
import Header from './Header';


export const StyledLayout = styled.div
`

    border: 1px solid;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 480px){
            width: auto;
    }
        // width: 720px;
`;

class Layout extends Component{


    render(){
        return(
                <StyledLayout>
                    <Helmet>
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                    </Helmet>

                    <Header/>
                    {this.props.children}
                    {/* <Footer/> */}
                </StyledLayout>
        );
    }
}


export default Layout;
