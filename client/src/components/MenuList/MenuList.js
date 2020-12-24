import React from 'react'
import Burgers from '../Burgers/Burgers'
import Drinks from '../Drinks/Drinks'
import Garnish from '../Garnish/Garnish'
import MeatInfo from '../MeatInfo/MeatInfo'

import './MenuList.scss'

export default function MenuList() {
  return (
    <div className="menuList">
      <div className='container'>
        <Burgers />
        <MeatInfo />
        <Garnish />
        <Drinks />
      </div>
    </div>
  )
}
