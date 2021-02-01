import React from 'react'
import burger from '../../assets/png/burger.png'
import Title from '../Title/Title'
import './Burgers.scss'
import { getLanguage } from '../../redux/selectors/languageSelector'
import { useSelector } from 'react-redux'
import InputNumber from '../InputNumber/InputNumber'
import { changeCountChicken, changeCountTurkey, changeCountBeef, changeCountPork } from '../../redux/actions/orderAction'
import { getOrder } from '../../redux/selectors/orderSelector'

export default function Burgers() {
  const lng = useSelector(getLanguage)
  const order = useSelector(getOrder);
  {/* {lng === 'RUS' && 'text' || lng === 'UKR' && 'text' || lng === 'ENG' && 'text'} */ }
  return (
    <div className='container'>
      <Title name='burgers' text={lng === 'RUS' && 'Бургеры' || lng === 'UKR' && 'Бургери' || lng === 'ENG' && 'Burgers'} className='burgers__title' />
      <div className='burgers__list'>
        <div className="burgers__item">
          <div className="burgers__icon burgers__icon--chicken"></div>
          <div className="burgers__imgContainer">
            <img src={burger} alt="бургер" className="burgers__img" />
          </div>
          <p className="burgers__itemText">
            {lng === 'RUS' && 'Чикен Бургер' || lng === 'UKR' && 'Чікен Бургер' || lng === 'ENG' && 'Chicken Burger'}

          </p>
          <div className="burgers__itemCounter">
            {lng === 'ENG' ? 'for' : 'за'}
            <InputNumber action={changeCountChicken} defaultVal={order.chicken} val={order.chicken} className='burgers__input' />
            {lng === 'ENG' ? 'pcs' : 'шт.'}
          </div>
          <div className="burgers__price">
            {order.chickenPrice} {lng === 'ENG' ? 'uah' : 'грн'}
          </div>
        </div>
        <div className="burgers__item">
          <div className="burgers__icon burgers__icon--turkey"></div>
          <div className="burgers__imgContainer">
            <img src={burger} alt="бургер" className="burgers__img" />
          </div>
          <p className="burgers__itemText">
            {lng === 'RUS' && 'Бургер из индейки' || lng === 'UKR' && 'Бургер з індички' || lng === 'ENG' && 'Turkey burger'}
          </p>
          <div className="burgers__itemCounter">
            {lng === 'ENG' ? 'for' : 'за'}
            <InputNumber action={changeCountTurkey} defaultVal={order.turkey} val={order.turkey} className='burgers__input' />
            {lng === 'ENG' ? 'pcs' : 'шт.'}
          </div>
          <div className="burgers__price">
            {order.turkeyPrice} {lng === 'ENG' ? 'uah' : 'грн'}
          </div>
        </div>
        <div className="burgers__item">
          <div className="burgers__icon burgers__icon--cow"></div>
          <div className="burgers__imgContainer">
            <img src={burger} alt="бургер" className="burgers__img" />
          </div>
          <p className="burgers__itemText">
            {lng === 'RUS' && 'Классический бургер' || lng === 'UKR' && 'Класичний бургер' || lng === 'ENG' && 'Classic Burger'}
          </p>
          <div className="burgers__itemCounter">
            {lng === 'ENG' ? 'for' : 'за'}
            <InputNumber action={changeCountBeef} defaultVal={order.beef} val={order.beef} className='burgers__input' />
            {lng === 'ENG' ? 'pcs' : 'шт.'}
          </div>
          <div className="burgers__price">
            {order.beefPrice} {lng === 'ENG' ? 'uah' : 'грн'}
          </div>
        </div>
        <div className="burgers__item">
          <div className="burgers__icon burgers__icon--pig"></div>
          <div className="burgers__imgContainer">
            <img src={burger} alt="бургер" className="burgers__img" />
          </div>
          <p className="burgers__itemText">
            {lng === 'RUS' && 'Свинной бургер' || lng === 'UKR' && 'Бургер з свинини' || lng === 'ENG' && 'Pork burger'}
          </p>
          <div className="burgers__itemCounter">
            {lng === 'ENG' ? 'for' : 'за'}
            <InputNumber action={changeCountPork} defaultVal={order.pork} val={order.pork} className='burgers__input' />
            {lng === 'ENG' ? 'pcs' : 'шт.'}
          </div>
          <div className="burgers__price">
            {order.porkPrice} {lng === 'ENG' ? 'uah' : 'грн'}
          </div>
        </div>
      </div>
    </div>
  )
}
