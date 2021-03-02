import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

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
                <AnimatePresence exitBeforeEnter>
                    <Header/>
                    <motion.div
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ y: 30, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        {/* <StyledLayout> */}

                                {this.props.children}
                            <Footer/>
                        {/* </StyledLayout> */}
                    </motion.div>
                </AnimatePresence>
            </ThemeProvider>
        );
    }
}


export default Layout;
