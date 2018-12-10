import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'

const NotFoundPage = () => (
  <Layout>
    <Header />
    <div className="page404">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
