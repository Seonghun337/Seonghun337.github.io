import React, { Component } from 'react'
import * as Styled from "./style";
import { useStaticQuery, graphql } from 'gatsby';
import Container from "../ui/Container"


import ProjectCard from "../ui/ProjectCard"



const HeroBanner = () => {
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
    const data = queryResult.allMarkdownRemark.edges;
    const metadata = queryResult.markdownRemark.frontmatter;


    return(
            <Container>
                <Styled.Carousel>
                    {/* <ProjectCard
                        title="로렌 입숨"
                        team={["김가가","박바바"]}
                        desc="가진 때에, 따뜻한 보이는 품에 영락과 긴지라 
                        청춘 그들은 있다. 남는 가치를 것이다. 인생에
                        몸이 스며들어 우리의 품으며, 피어나기 가진
                        얼마나 인도하겠다는 아니다."
                        stack="Nodejs, Firebase, FCM, Expressjs, Vuejs"
                    /> */}
                    {
                        data.map((obj) => {
                            const item = obj.node.frontmatter;
                            return(
                                    <ProjectCard
                                        thumbnail={item.thumbnail}
                                        title={item.title}
                                        team={item.team}
                                        desc={item.desc}
                                        stack={item.stack}              
                                    />
                            )
                        })
                    }
                </Styled.Carousel>
                <h1>DEVHUN</h1>
                <Styled.Saparator></Styled.Saparator>
                <p>
                    안녕하세요. 스며들어 온갖 밥을 심장의 찾아다. 인생에 몸이다. 남는 가치를 것이다. 인생에 몸이 스며들어 
                    우리의 품으며, 피어나기 가진 얼마나 인도하겠다는 아니다. 스며들어 온갖 밥을 심장의 찾아다. 가진 때에, 
                    따뜻한 보이는 품에 영락과 긴지라 청춘 그들은 있다. 남는가치를 것이다. 인생에 몸이다.
                </p>
            </Container>
    );

}

export default HeroBanner;