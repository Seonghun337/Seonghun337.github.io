import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Container from '../ui/Container'
import ProjectCard from '../ui/ProjectCard'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px auto;
`

const CardWrapper = styled.div`
    margin-top: 60px;
`

const Works = (props) => {

    const workQuery = graphql`
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
            markdownRemark(frontmatter: {category: {eq: "work metadata"}}) {
                frontmatter {
                    title
                }
            }
        }
    `

    const queryResult = useStaticQuery(workQuery)
    // const metadata = queryResult.markdownRemark.frontmatter;
    const data = queryResult.allMarkdownRemark.edges;

    return(
        <Container>
            <Wrapper>
            {
                data.map((obj) => {
                    const item = obj.node.frontmatter;
                    return(
                        <CardWrapper>
                            <ProjectCard
                                hoverActive={true}
                                thumbnail={item.thumbnail}
                                title={item.title}
                                team={item.team}
                                desc={item.desc}
                                stack={item.stack}              
                            />
                        </CardWrapper>
                    )
                })
            }
            </Wrapper>
        </Container>
    );

}


export default Works;
