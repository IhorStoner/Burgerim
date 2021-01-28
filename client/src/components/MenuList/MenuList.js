import React from 'react'
import Burgers from '../Burgers/Burgers'
import Drinks from '../Drinks/Drinks'
import AboutUs from '../AboutUs/AboutUs'
import './MenuList.scss'
import OrderListInfo from '../OrderListInfo/OrderListInfo'

export default function MenuList() {
  return (
    <div className="menuList">
      <div className='container'>
        <AboutUs />
        <Burgers />
        <OrderListInfo />
        <Drinks />
      </div>
    </div>
  )
}
