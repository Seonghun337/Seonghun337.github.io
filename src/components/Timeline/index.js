import React, { Component } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Container from '../ui/Container';
import CareerCard from './CareerCard';
import IntroTitle from '../ui/IntroTitle';
import Saparator from '../ui/Saparator';



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
    color: ${({theme}) => theme.colors.mainColor2};

    left:20%;
    @media screen and (min-width: ${({theme}) => theme.size.validWidth}px){
        left:50%;
    }

`


const LayerWrapper = styled.div`
    width: 100%;

    position: relative;
    display:flex;
    justify-content:center;
    padding: auto;
`


const TimeDot = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1.5px solid ${({theme}) => theme.colors.mainColor2};
    background-color: ${({theme}) => theme.colors.white};


    position: absolute;
    z-index: 2;
    top:22px;
    transform:translateX(-50%);
    left:20%;
    @media screen and (min-width: ${({theme}) => theme.size.validWidth}px){
        left:50%;
    }

    
`

const Blank = styled.div`
    width:50%;
    height:auto;


    @media screen and (max-width: ${({theme}) => theme.size.validWidth}px){
        display:none;
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

    const queryResult = useStaticQuery(careersQuery)
    const data = queryResult.allMarkdownRemark.edges;
    const metadata = queryResult.markdownRemark.frontmatter;


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
                                <LayerWrapper>
                                {
                                    item.careerType!=='experience'
                                    ? (
                                        <>
                                            <CareerCard
                                                isLeft={item.careerType==='experience'?false:true}
                                                title={item.title}
                                                desc={item.desc}
                                                startDate={item.startDate}
                                                endDate={item.endDate}
                                            />
                                            <TimeDot/>
                                            <Blank/>
                                        </>
                                    )
                                    : (
                                        <>
                                            <Blank/>
                                            <TimeDot/>
                                            <CareerCard
                                                title={item.title}
                                                desc={item.desc}
                                                startDate={item.startDate}
                                                endDate={item.endDate}
                                            />
                                        </>
                                    )
                                }
                            </LayerWrapper>
                        )
                    })
                }
            </Wrapper>
        </Container>
    );
    
}


export default Timeline;
