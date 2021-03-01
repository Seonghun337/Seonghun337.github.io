import React, { Component } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Container from '../ui/Container';
import CareerCard from './CareerCard';
import IntroTitle from '../ui/IntroTitle';
import Saparator from '../ui/Saparator';

import {useMediaQuery} from "react-responsive"



const Wrapper = styled.div`
    margin: 45px auto;
    
    position: relative;

    &:after {
        content: "";
        clear: both;
    }
`

const VerticalLine = styled.div`
    width: 0;
    height: 100%;
    left: 50%;
    z-index: 1;
    border: solid 0.5px;
    position: absolute;
    color: ${({theme}) => theme.colors.mainColor3};

    left:20%;
    @media screen and (min-width: ${({theme}) => theme.size.validWidth}px){
        left:50%;
    }

`



const Timeline = () => {

    const careersQuery = graphql`
        query{
            allMarkdownRemark(filter: {frontmatter: {category: {eq: "career"}}}) {
                edges {
                node {
                        frontmatter {
                            title
                            desc
                            careerType
                            startDate
                            endDate
                        }
                    }
                }
            }
            markdownRemark(frontmatter: {category: {eq: "career metadata"}}) {
                frontmatter {
                  title
                }
            }
        }
    `

    const data = useStaticQuery(careersQuery).allMarkdownRemark.edges;
    const metadata = useStaticQuery(careersQuery).markdownRemark.frontmatter;

    return(
        <Container>
            <IntroTitle title={metadata.title}/>
            <Saparator />
            <Wrapper>
                <VerticalLine/>
                {
                    data.map((obj) => {
                        const item = obj.node.frontmatter;
                        return(
                                <CareerCard
                                    // singleLine={
                                    //     true
                                    // }
                                    title={item.title}
                                    desc={item.desc}
                                    isLeft={item.careerType==='experience'?false:true}
                                    startDate={item.startDate}
                                    endDate={item.endDate}
                                />
                        )
                    })
                }
            </Wrapper>
        </Container>
    );
    
}


export default Timeline;
