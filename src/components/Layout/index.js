import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import theme from '../../styles/theme'

export const StyledLayout = styled.div
`

`;

class Layout extends Component{


    render(){
        return(
            <ThemeProvider theme={theme}>
                <StyledLayout>
                    {/* <Helmet>
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                    </Helmet> */}

                    <Header/>
                        {this.props.children}
                    <Footer/>
                </StyledLayout>
            </ThemeProvider>
        );
    }
}


export default Layout;
