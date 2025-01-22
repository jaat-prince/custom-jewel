import React from 'react'
import Order from '../../components/Home/Order'
import  See from '../../components/Home/See'
import  Shop from '../../components/Home/Shop'
import  Hero from '../../components/Home/Hero'
import Img from '../../components/Home/Img'
import Service from '../../components/Home/Service'
import Loose from '../../components/Home/Loose'
import Top from '../../components/Home/Top'

function Home() {
  return (
    <div> <Hero/>
    <Order/>
    <Loose/>
    <Top/>
    <Shop/>
    <See/>
    <Img/>
    <Service/>
    </div>
  )
}

export default Home