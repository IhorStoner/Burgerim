import React from 'react'
import box1 from '../../assets/png/box1.png'
import box2 from '../../assets/png/box2.png'
import box3 from '../../assets/png/box3.png'
import box4 from '../../assets/png/box4.png'
import Title from '../Title/Title'
import './Burgers.scss'
import { getLanguage } from '../../redux/selectors/languageSelector'
import { useSelector } from 'react-redux'

export default function Burgers() {
  const language = useSelector(getLanguage)

  return (
    <div>
      <Title name='burgers' text={language === 'RU' ? 'Бургеры' : 'Бургери'} />
      <div className='burgers__list'>
        <div className="burgers__item">
          <div className="burgers__itemContent">
            <div className="burgers__imgContainer">
              <img className="burgers__img" src={box1} alt="Бургеры 2 штуки" />
            </div>
            <div className='burgers__count'>2 шт.</div>
            <p>{language === 'RU' ? 'Сет из 2-х бургеров  для быстрого перекуса' : 'Набір з 2 гамбургерів для швидкого перекусу'}</p>
            <p className="burgers__price">80 грн</p>
          </div>
        </div>
        <div className="burgers__item">
          <div className="burgers__itemContent">
            <div className="burgers__imgContainer">
              <img className="burgers__img" src={box2} alt="Бургеры 3 штуки" />
            </div>
            <div className='burgers__count'>3 шт.</div>
            <p>{language === 'RU' ? 'Сет из 3-х бургеров для сытного обеда' : 'Набір з 3 гамбургерів для ситного обіду	'}</p>
            <p className="burgers__price">110 грн</p>
          </div>
        </div>
        <div className="burgers__item">
          <div className="burgers__itemContent">
            <div className="burgers__imgContainer">
              <img className="burgers__img" src={box3} alt="Бургеры 8 штук" />
            </div>
            <div className='burgers__count'>8 шт.</div>
            <p>{language === 'RU' ? 'Сет из 8-ми бургеров для вас и ваших друзей' : 'Набір з 8 гамбургерів для вас та ваших друзів'}</p>
            <p className="burgers__price">300 грн</p>
          </div>
        </div>
        <div className="burgers__item">
          <div className="burgers__itemContent">
            <div className="burgers__imgContainer">
              <img className="burgers__img" src={box4} alt="Бургеры 16 штук" />
            </div>
            <div className='burgers__count'>16 шт.</div>
            <p>{language === 'RU' ? 'Сет из 16-ти бургеров для большой компании' : 'Сет з 16-ти бургерів для великої компанії'} </p>
            <p className="burgers__price">550 грн</p>
          </div>
        </div>
      </div>
    </div>
  )
}
