import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Navber from './Navber'

const Layout = () => {
  return (
    <>
      <Navber />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout