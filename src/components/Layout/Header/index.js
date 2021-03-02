import React, { Component } from 'react'
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
    // const [selected, setSelected] = useState(false);

    return(
        <Container background={true}>
            {/* <Styled.Logo/> */}
            <Styled.NavBar>
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
            </Styled.NavBar>
        </Container>
    );
    
}

export default Header