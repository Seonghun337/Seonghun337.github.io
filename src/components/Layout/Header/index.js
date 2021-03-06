import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import * as Styled from "./style";
import Container from "../../ui/Container"

const NavItems = [
    {
      title: 'About',
      slug: '/'
    },
    {
      title: 'Work',
      slug: '/work/'
    },
    {
      title: 'Blog',
      slug: '/blog/'
    }
];

const Header = () => {
    const queryResult = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "Logo.png" }) {
                childImageSharp {
                    fixed(width:130) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);
    const LogoImage = queryResult.placeholderImage.childImageSharp.fixed;

    const [open, setOpen] = useState(false);

    return(
        <Container background={true}>

            <Styled.Wrapper>


                <Styled.NavBar open={open}>
                    <Styled.Logo fixed={LogoImage} alt={'logo'}/>


                    <Styled.ToogleButton open={open} onClick={() => setOpen(!open)}/>

                    <Styled.NavItemWrapper open={open}>

                        <Styled.NavItem/>   {/*형제 선택자가 뒤에 오는 애들만 선택 가능*/}
                        {
                            NavItems.map((item, index) => (
                                <Styled.NavItem
                                    key={`nav-item-${index}`}
                                    to={item.slug}
                                    activeClassName='active'
                                >
                                    {item.title}
                                </Styled.NavItem>
                            ))
                        }
                    </Styled.NavItemWrapper>
                </Styled.NavBar>

            </Styled.Wrapper>
        </Container>
    );
    
}

export default Header