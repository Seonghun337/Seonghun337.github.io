import React from 'react'
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Container from "../ui/Container"

import Carousel from "./Carousel"
import ProjectCard from "../ui/ProjectCard"
import Saparator from "../ui/Saparator"


const HeroBanner = () => {
    const bannerQuery = graphql`
        query{
            allMarkdownRemark(filter: {frontmatter: {category: {eq: "work"}}}) {
                edges {
                    node {
                            frontmatter {
                                thumbnail{
                                    childImageSharp{
                                        fluid{
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                                title
                                team
                                desc
                                stack
                            }
                        }
                    }
            }
            markdownRemark(frontmatter: {category: {eq: "about metadata"}}) {
                frontmatter {
                    title
                    desc
                }
            }
        }
    `

    const queryResult = useStaticQuery(bannerQuery)
    const data = queryResult.allMarkdownRemark.edges;
    const metadata = queryResult.markdownRemark.frontmatter;


    return(
            <Container>
                <Wrapper>
                    <Carousel>
                        {
                            data.map((obj) => {
                                const item = obj.node.frontmatter;
                                return(
                                    <CarouselItemWrapper>
                                        <ProjectCard
                                            thumbnail={item.thumbnail}
                                            title={item.title}
                                            team={item.team}
                                            desc={item.desc}
                                            stack={item.stack}
                                        />
                                    </CarouselItemWrapper>
                                )
                            })
                        }
                    </Carousel>
                    
                    <BannerWrapper>
                        <StyledTitleBox>
                            {metadata.title}
                        </StyledTitleBox>
                        <Saparator isLeft={true}/>
                        <StyledDescBox>
                            {metadata.desc}
                        </StyledDescBox>
                    </BannerWrapper>
                </Wrapper>
            </Container>
    );

}

const Wrapper = styled.div`
    // margin: auto 10px;
`

//그림자를 보여주기 위해
const CarouselItemWrapper = styled.div`

    margin: 15px auto;
    box-sizing: border-box;
`

const BannerWrapper = styled.div`
    margin: 90px 30px;
`

const StyledTitleBox = styled.h1`
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
`

const StyledDescBox = styled.p`
    font-size: 16px;
    font-weight: 100;
    margin: 10px auto;
    line-height: 24px;
`

export default HeroBanner;