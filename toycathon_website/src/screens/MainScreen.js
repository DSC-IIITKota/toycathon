import React from 'react'
import About from './About'
import Extra from './Extra'
import Faq from './Faq'
import Features from './Features'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Servicesb from './Servicesb'
import Pricing from './Pricing'
import Team from './Team'
import Testimonial from './Testimonial'

const MainScreen = () => {
    return (
        <div>
    <Header></Header>
    <Home></Home>
      <main id="main">
        <About></About>
        <Features></Features>
        <Extra></Extra>
        <Servicesb></Servicesb>
        <Testimonial></Testimonial>
        <Pricing></Pricing>
        <Team></Team>
        <Faq></Faq>
      </main>
      <Footer></Footer>
    </div>
    )
}

export default MainScreen
