import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="header-title"><span className="character">$</span>yndicate Trade</h1>
    <p className="header-slogan">Trade and Support</p>
  </Layout>
)

export default IndexPage
