import React from 'react'
import Order from '../../components/Home/Order'
import  See from '../../components/Home/See'
import  Shop from '../../components/Home/Shop'
import  Hero from '../../components/Home/Hero'

function Home() {
  return (
    <div> <Hero/>
    <Order/>
    <Shop/>
    <See/></div>
  )
}

export default Home