import React from "react"

import '../styles/global.css'

import Layout from "../components/Layout"
import HeroBanner from "../components/HeroBanner"
import Introduction from "../components/Introduction"
import SkillField from "../components/SkillFierd"
import Timeline from "../components/Timeline"


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
