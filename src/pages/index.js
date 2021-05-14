import * as React from "react"
import About from "../components/About"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero/>
    <About heading = "Learn more about my background and experience below"/>
    <Testimonials />
    <Stats />
    <Email />
   

  </Layout>
)

export default IndexPage
