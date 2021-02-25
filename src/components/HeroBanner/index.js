import React, { Component } from 'react'
import * as Styled from "./style";
import Container from "../ui/Container"

class HeroBanner extends Component{
    render(){
        return(
            // <Styled.Background>
                //{/* <Styled.Wrapper> */}
                    <Container>
                    <Styled.Carousel>
                        히어로 배너
                    </Styled.Carousel>
                    {/* <Styled.Wrapper> */}
                    <h1>DEVHUN</h1>
                    <Styled.Saparator></Styled.Saparator>
                    <p>
                    안녕하세요. 스며들어 온갖 밥을 심장의 찾아다. 인생에 몸이다. 남는 가치를 것이다. 인생에 몸이 스며들어 
    우리의 품으며, 피어나기 가진 얼마나 인도하겠다는 아니다. 스며들어 온갖 밥을 심장의 찾아다. 가진 때에, 
    따뜻한 보이는 품에 영락과 긴지라 청춘 그들은 있다. 남는가치를 것이다. 인생에 몸이다.
                    </p>
                    {/* </Styled.Wrapper> */}
                    </Container>
                //{/* </Styled.Wrapper> */}
            // </Styled.Background>
        );
    }
}

export default HeroBanner;