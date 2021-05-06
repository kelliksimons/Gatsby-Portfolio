import * as React from "react"
import About from "../components/About"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero/>
    <About/>
  </Layout>
)

export default IndexPage
