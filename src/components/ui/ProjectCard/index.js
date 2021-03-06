import React from 'react'
import * as Styled from './style'
import Icon from '../Icon'

const ProjectCard = (props) => {
    return(
        <Styled.Wrapper hoverActive={props.hoverActive}>
            <Styled.ContentBox>
                <Styled.TitleBox>{props.title}</Styled.TitleBox>
                <Styled.TeamBox>with {props.team}</Styled.TeamBox>
                <Styled.DateBox>2020.03 - 2021.05</Styled.DateBox>
                <Styled.DescBox>{props.desc}</Styled.DescBox>
                <Styled.StackBox>{props.stack}</Styled.StackBox>
                <Styled.ViewMore>자세히보기
                    <Icon
                        name="ChevronRight"
                        width="12"
                        height="12"
                    />
                </Styled.ViewMore>
            </Styled.ContentBox>
            <Styled.CenterPadding/>
            <Styled.ThumbnailBox 
                fluid={props.thumbnail.childImageSharp.fluid}
                alt={props.title}
            />
        </Styled.Wrapper>
    );

}


export default ProjectCard;
