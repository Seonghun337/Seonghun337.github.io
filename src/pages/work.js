import React from "react"

import '../styles/global.css'

import Layout from "../components/Layout"
import Works from "../components/Works"


const WorkPage = () => {
  return (
    <Layout>
      {/* <SEO title="Home" />    검색엔진최적화 */}
        <Works/>
    </Layout>
  )
}

export default WorkPage;
