import React from "react"

import '../styles/global.css'

import Layout from "../components/Layout"
import Blog from "../components/Blog"


const BlogPage = () => {
  return (
    <Layout>
      {/* <SEO title="Home" />    검색엔진최적화 */}
        <Blog/>
    </Layout>
  )
}

export default BlogPage;
