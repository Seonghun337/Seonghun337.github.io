import React from 'react'
import * as Styled from './style'
import Icon from '../Icon'

const PostCard = (props) => {
    return(
        <Styled.Wrapper>

            <Styled.CoverBox fluid={props.cover}/>

            {/* <Styled.HeaderBox> */}
                <Styled.TitleBox>{props.title}</Styled.TitleBox>
                <Styled.DateBox>{props.date}</Styled.DateBox>
            {/* </Styled.HeaderBox> */}

            <Styled.DescBox>{props.desc}</Styled.DescBox>

            <Styled.ViewMore>Read more
                <Icon
                    name="ChevronRight"
                    width="6"
                    height="6"
                />
            </Styled.ViewMore>
        </Styled.Wrapper>
    );

}


export default PostCard;
