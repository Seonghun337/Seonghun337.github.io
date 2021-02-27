import React, { Component } from 'react'
import * as Styled from "./style";
import Container from "../ui/Container";
import Saparator from "../ui/Saparator";
import Title from "../ui/IntroTitle";
import { useStaticQuery, graphql } from 'gatsby';

const Introduction = () => {
    const aboutQuery = graphql`
        query{
            markdownRemark(frontmatter: {category: {eq: "introduction"}}) {
                frontmatter {
                    title
                    profileText
                    profileImage{
                        childImageSharp{
                            fluid{
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `

    const data = useStaticQuery(aboutQuery).markdownRemark.frontmatter;

    return(
        <Container>
            <Title title={data.title}></Title>
            <Saparator />
            <Styled.Wrapper>
                {/* <Img fluid={data.ProfileImage}></Img> */}
                {/* <Img fluid={data.profileImage.childImageSharp.fluid}></Img> */}
                <Styled.ProfileImage
                    fluid={data.profileImage.childImageSharp.fluid}
                    alt={data.title}
                />
                
                <Styled.ProfileText>
                    {data.profileText}
                    
                </Styled.ProfileText>
            </Styled.Wrapper>
        </Container>
    );

}

export default Introduction;

