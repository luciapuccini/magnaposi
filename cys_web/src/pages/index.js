import React from "react"
import { Link } from "gatsby"
import Header from '../components/header'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="App">
      <h1 className="main">Hello cys</h1>
    </div>
  </Layout>
)

export default IndexPage

