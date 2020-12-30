import React from 'react'
import Burgers from '../Burgers/Burgers'
import Drinks from '../Drinks/Drinks'
import Garnish from '../Garnish/Garnish'
import MeatInfo from '../MeatInfo/MeatInfo'
import AboutUs from '../AboutUs/AboutUs'
import './MenuList.scss'

export default function MenuList() {
  return (
    <div className="menuList">
      <div className='container'>
        <Burgers />
        <MeatInfo />
        <AboutUs />
        {/* <Garnish /> */}
        <Drinks />
      </div>
    </div>
  )
}
