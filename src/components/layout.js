import './bootstrap.min.css'
//Below is used only for development, comment out for production, else failed to "gatsby build" or netlify build
//import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import React from 'react'
import Footer from './footer'
import './styles/style.scss'
import Transition from './transition'

const Layout = ({ children, location }) => (
  <>
    <Transition location={location}>{children}</Transition>
  </>
)

export default Layout
