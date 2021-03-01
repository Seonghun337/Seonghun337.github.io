import React from "react"
import { Helmet } from "react-helmet"

import '../styles/global.css'

import Layout from "../components/Layout"
import HeroBanner from "../components/HeroBanner"
import Introduction from "../components/Introduction"
import SkillField from "../components/SkillFierd"
import Timeline from "../components/Timeline"

// import SEO from "../components/seo"



const IndexPage = () => {
  return (
    <Layout>
      {/* <SEO title="Home" />    검색엔진최적화 */}
      <HeroBanner/>
      <Introduction/>
      <SkillField />
      <Timeline/>
    </Layout>
  )
}

export default IndexPage;
