import React from 'react'
import box1 from '../../assets/png/box1.png'
import box2 from '../../assets/png/box2.png'
import box3 from '../../assets/png/box3.png'
import box4 from '../../assets/png/box4.png'
import Title from '../Title/Title'
import './Burgers.scss'

export default function Burgers() {
  return (
    <div>
      <Title name='burgers' text='Бургеры'/>
      <div className='burgers__list'>
        <div className="burgers__item">
          <div className="burgers__itemContent">
            <div className="burgers__imgContainer">
              <img className="burgers__img" src={box1} alt="" />
            </div>
            <div className='burgers__count'>2 шт.</div>
            <p>Сет из 2-х бургеров  для быстрого перекуса</p>
            <p className="burgers__price">80 грн</p>
          </div>
        </div>
        <div className="burgers__item">
          <div className="burgers__itemContent">
            <div className="burgers__imgContainer">
              <img className="burgers__img" src={box2} alt="" />
            </div>
            <div className='burgers__count'>3 шт.</div>
            <p>Сет из 3-х бургеров для сытного обеда</p>
            <p className="burgers__price">110 грн</p>
          </div>
        </div>
        <div className="burgers__item">
          <div className="burgers__itemContent">
            <div className="burgers__imgContainer">
              <img className="burgers__img" src={box3} alt="" />
            </div>
            <div className='burgers__count'>8 шт.</div>
            <p>Сет из 8-ми бургеров для вас и ваших друзей</p>
            <p className="burgers__price">300 грн</p>
          </div>
        </div>
        <div className="burgers__item">
          <div className="burgers__itemContent">
            <div className="burgers__imgContainer">
              <img className="burgers__img" src={box4} alt="" />
            </div>
            <div className='burgers__count'>16 шт.</div>
            <p>Сет из 16-ти бургеров для большой компании </p>
            <p className="burgers__price">550 грн</p>
          </div>
        </div>
      </div>
    </div>
  )
}
