import React, { Component } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Container from '../ui/Container';
import SkillCard from './SkillCard'
import IntroTitle from '../ui/IntroTitle';
import Saparator from '../ui/Saparator';

const Wrapper = styled.div`
    margin: 45px auto;

    display:flex;
    flex-wrap:wrap;
    align-content: space-around;
`

const SkillFierd = () => {

    const skillsQuery = graphql`
        query{
            allMarkdownRemark(filter: {frontmatter: {category: {eq: "skillField"}}}) {
                edges {
                node {
                        frontmatter {
                            title
                            desc
                            icon
                        }
                    }
                }
            }
            markdownRemark(frontmatter: {category: {eq: "skillField metadata"}}) {
                frontmatter {
                    title
                    
                }
            }
        }
    `

    const queryResult = useStaticQuery(skillsQuery)
    const metadata = queryResult.markdownRemark.frontmatter;
    const data = queryResult.allMarkdownRemark.edges;

    return(
        <Container>
            <IntroTitle title={metadata.title}/>
            <Saparator />
            <Wrapper>
            {
                data.map((obj) => {
                    const item = obj.node.frontmatter;
                    return(
                        <SkillCard
                            icon={item.icon}
                            title={item.title}
                            desc={item.desc}              
                        />
                    )
                })
            }
            </Wrapper>
        </Container>
    );
    
}


export default SkillFierd;
