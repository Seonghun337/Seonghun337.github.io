import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Container from "../components/ui/Container"
import 'github-markdown-css'

const postTemplate = ({data}) => {
  const post = data.markdownRemark; // data.markdownRemark holds your post data
  // const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Container>
        <div className="blog-post-container">
          <div className="blog-post markdown-body">
            <h1>{post.frontmatter.title}</h1>
            <h2>{post.frontmatter.date}</h2>

             
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
      </Container>
    </Layout>

  )
}
export default postTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`