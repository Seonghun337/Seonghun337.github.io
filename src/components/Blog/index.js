import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Container from '../ui/Container'
import PostCard from '../ui/PostCard'
import Link from 'gatsby-link'

const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-content: space-between;
    margin: 20px auto;
`

const CardWrapper = styled.div`
    margin: 20px auto;
`

const Blog = (props) => {

    const blogQuery = graphql`
        query{
            allMarkdownRemark(
                filter: {frontmatter: {category: {eq: "blog"}, published: { eq: true } }}
                sort: { fields: frontmatter___date, order: DESC }
                ){
                edges {
                    node {
                        id
                        html
                        
                        frontmatter {
                            slug
                            cover{
                                childImageSharp{
                                    fluid{
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            title
                            desc
                            date
                            }
                        }
                    }
            }
        }
    `

    const queryResult = useStaticQuery(blogQuery)
    const data = queryResult.allMarkdownRemark.edges;

    return(
        <Container>
            <Wrapper>
            {
                data.map((obj) => {
                    const item = obj.node.frontmatter;
                    return(

                        <CardWrapper >
                            <Link to={item.slug}>
                                <PostCard
                                    cover={item.cover.childImageSharp.fluid}
                                    title={item.title}
                                    desc={item.desc}
                                    date={item.date}              
                                />
                            </Link>
                        </CardWrapper>

                    )
                })
            }
            </Wrapper>
        </Container>
    );

}


export default Blog;
