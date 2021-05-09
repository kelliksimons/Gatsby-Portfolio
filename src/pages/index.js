import * as React from "react"
import About from "../components/About"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Testimonials from "../components/Testimonials"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero/>
    <About heading = "Learn more about my background and experience below"/>
    <Testimonials />
  </Layout>
)

export default IndexPage
