import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/landingPage/Hero'
import Category from '../components/landingPage/Category'
import TrendingNews from '../components/landingPage/TrendingNews'
import Football from '../components/landingPage/Football'
import SportsArticals from '../components/landingPage/SportsArtical'
import Subcreption from '../components/landingPage/Subcreption'
import Footer from '../components/landingPage/Footer'
import SportsComponent from '../components/landingPage/RecentNews'


export default function LandingPage() {
  return (
    <div>
      <Nav />
      <Hero />
      <Category />
      <TrendingNews />
      <Football/>
      <SportsComponent/>
      <SportsArticals/>
      <Subcreption/>
      <Footer/>
    </div>
  )
}
