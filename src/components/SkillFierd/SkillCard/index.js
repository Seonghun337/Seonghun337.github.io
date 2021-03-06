import React from 'react';
import styled, { keyframes } from 'styled-components';
import Icon from "../../ui/Icon"

const Wrapper = styled.div`
    border: 1px solid ${({theme}) => theme.colors.gray1};
    width: 300px;
    height: 130px;
    border-radius: 17px;
    padding: 12px;
    margin: 15px auto;

    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: flex-start;


    &:hover{
        transform: scale(1.03,1.03);
    }
    transition: transform .1s linear;
    
`

const IconWrapper = styled.div`
    width: 40px;
    height: 40px;
    border-radius:50%;    
    border: 1px solid ${({theme}) => theme.colors.mainColor1};
    color: ${({theme}) => theme.colors.gray2};
    display: flex;
    justify-content: center;
    align-items: center;

`

const TitleBox = styled.div`
    font-size: 16px;
    font-weight: 500;
    padding: 6px 0;
`

const DescBox = styled.div`
    font-size: 16px;
    font-weight: 200;
    margin: 4px 0;
`

const translateLoop = keyframes`
    0% {
        transform: translate(0px);
    }
    50% {
        transform: translate(4px);
    }
    100% {
        transform: translate(0px);
    }
`

const ViewMore = styled.a`
    font-size: 16px;
    font-weight: 200;
    margin: auto 0;
    display: flex;
    align-items: flex-end;

    
    ${Wrapper}:hover & {
        animation: ${translateLoop} .7s 0s linear infinite;
    }

`




const SkillCard = (props) => {


    return(
        <Wrapper>
            <IconWrapper>
                <Icon 
                    name={props.icon}
                    width="30" 
                    height="30"
                />
            </IconWrapper>
            <TitleBox>{props.title}</TitleBox>
            <DescBox>{props.desc}</DescBox>
            <ViewMore>
                <a>view more</a>
                <Icon
                    name="ChevronRight"
                    width="12"
                    height="12"
                />
            </ViewMore>
        </Wrapper>
    );
    
}


export default SkillCard;
