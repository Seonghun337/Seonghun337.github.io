import React, { Component } from 'react'
// import * as Styled from "./style";
import styled from 'styled-components';
import Container from "../../ui/Container";
import * as Icon from 'react-bootstrap-icons';


const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: 30px;
`

const ContactIcon = styled.a`
    margin: 0 10px;
    color: ${({theme}) => theme.colors.black};
`

const FooterText = styled.div`
    font-size: 10px;
    font-weight: 200;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 30px;
`

class Footer extends Component{
    render(){
        return(
            <Container background="true">
                <IconWrapper>
                    <ContactIcon
                        href="https://github.com/Seonghun337"
                    >
                        <Icon.Github
                            width="40"
                            height="40"
                            
                        />
                    </ContactIcon>

                    <ContactIcon
                        href="mailto:sung2687@gmail.com"
                    >
                        <Icon.EnvelopeFill
                            width="40"
                            height="40"
                            
                        />
                    </ContactIcon>
                    
                </IconWrapper>

                <FooterText>
                    designed by Seonghun
                </FooterText>


            </Container>
        );
    }
}

export default Footer