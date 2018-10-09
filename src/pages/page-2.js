import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Should be a great time!</h1>
    <p>See you there :)</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
