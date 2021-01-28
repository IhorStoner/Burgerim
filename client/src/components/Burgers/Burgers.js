import React from 'react'
import burger from '../../assets/png/burger.png'
import Title from '../Title/Title'
import './Burgers.scss'
import { getLanguage } from '../../redux/selectors/languageSelector'
import { useSelector } from 'react-redux'
import InputNumber from '../InputNumber/InputNumber'
import {changeCountChicken,changeCountTurkey,changeCountBeef,changeCountPork} from '../../redux/actions/orderAction'
import { getOrder } from '../../redux/selectors/orderSelector'

export default function Burgers() {
  const language = useSelector(getLanguage)
  const order = useSelector(getOrder);

  return (
    <div>
      <Title name='burgers' text={language === 'RU' ? 'Бургеры' : 'Бургери'} />
      <div className='burgers__list'>
        <div className="burgers__item">
          <div className="burgers__imgContainer">
            <img src={burger} alt="бургер" className="burgers__img" />
          </div>
          <p className="burgers__itemText">
            Сочная куриная котлета с добавлением специй
          </p>
          <div className="burgers__itemCounter">
            за
            <InputNumber action={changeCountChicken} defaultVal={order.chicken}/>
            шт.
          </div>
          <div className="burgers__price">
            {order.chickenPrice} грн
          </div>
        </div>
        <div className="burgers__item">
          <div className="burgers__imgContainer">
            <img src={burger} alt="бургер" className="burgers__img" />
          </div>
          <p className="burgers__itemText">
            Диетическая котлета из индейки
          </p>
          <div className="burgers__itemCounter">
            за
            <InputNumber action={changeCountTurkey} defaultVal={order.turkey}/>
            шт.
          </div>
          <div className="burgers__price">
          {order.turkeyPrice} грн
          </div>
        </div>
        <div className="burgers__item">
          <div className="burgers__imgContainer">
            <img src={burger} alt="бургер" className="burgers__img" />
          </div>
          <p className="burgers__itemText">
            Аппетитная котлета из говядины
          </p>
          <div className="burgers__itemCounter">
            за
            <InputNumber action={changeCountBeef} defaultVal={order.beef}/>
            шт.
          </div>
          <div className="burgers__price">
            {order.beefPrice} грн
          </div>
        </div>
        <div className="burgers__item">
          <div className="burgers__imgContainer">
            <img src={burger} alt="бургер" className="burgers__img" />
          </div>
          <p className="burgers__itemText">
            Сытная котлета из свинины
          </p>
          <div className="burgers__itemCounter">
            за
            <InputNumber action={changeCountPork} defaultVal={order.pork}/>
            шт.
          </div>
          <div className="burgers__price">
            {order.porkPrice} грн
          </div>
        </div>
      </div>
    </div>
  )
}
