import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <h3>My name is Andrew Wilson</h3>
    <p>I built this hello-world example so I can apply for the JAMstack hackathon on Nov 3-4, 2018.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
