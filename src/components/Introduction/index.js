import React, { Component } from 'react'
import * as Styled from "./style";
import Container from "../ui/Container";
import Saparator from "../ui/Saparator";
import Title from "../ui/IntroTitle";

class Introduction extends Component{
    render(){
        return(
            <Container>
                <Title title="소개"></Title>
                <Saparator />
                <Styled.Wrapper>
                    <Styled.ProfileImage></Styled.ProfileImage>
                    <Styled.ProfileText>
                        가진 때에, 따뜻한 보이는 품에 영락과 긴지라 청춘 그들은 있다. 남는
                        가치를 것이다. 인생에 몸이 스며들어 우리의 품으며, 피어나기 가진 얼마나 
                        인도하겠다는 아니다. 스며들어 온갖 밥을 심장의 찾아다.
                    </Styled.ProfileText>
                </Styled.Wrapper>
            </Container>
        );
    }
}

export default Introduction;