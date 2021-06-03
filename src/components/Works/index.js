import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Container from '../ui/Container'
import ProjectCard from '../ui/ProjectCard'
import Link from 'gatsby-link'

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
            allMarkdownRemark(filter: {frontmatter: {category: {eq: "project"}}}) {
                edges {
                    node {
                            fields{
                                slug
                            }
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
        }
    `

    const queryResult = useStaticQuery(workQuery)
    const data = queryResult.allMarkdownRemark.edges;

    return(
        <Container>
            <Wrapper>
            {
                data.map((obj) => {
                    const item = obj.node;
                    return(
                        <Link to={item.fields.slug}>
                            <CardWrapper>
                                <ProjectCard
                                    hoverActive={true}
                                    thumbnail={item.frontmatter.thumbnail}
                                    title={item.frontmatter.title}
                                    team={item.frontmatter.team}
                                    desc={item.frontmatter.desc}
                                    stack={item.frontmatter.stack}              
                                />
                            </CardWrapper>
                        </Link>
                    )
                })
            }
            </Wrapper>
        </Container>
    );

}


export default Works;
