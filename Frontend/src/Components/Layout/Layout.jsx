import React from 'react'
import { Outlet } from 'react-router-dom'
import TopHeader from '../TopHeader/TopHeader'
import MainHeader from '../MainHeader/MainHeader'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <div>
        <TopHeader />
        <MainHeader />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout