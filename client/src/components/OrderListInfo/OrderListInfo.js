import React from 'react'
import './OrderListInfo.scss'
import Title from '../Title/Title'
import OrderItem from '../OrderItem/OrderItem'
import { useSelector } from 'react-redux'
import { getOrder } from '../../redux/selectors/orderSelector'
import {useDispatch} from 'react-redux'
import { openPopup } from '../../redux/actions/popUpAction'
import { getLanguage } from '../../redux/selectors/languageSelector'

export default function OrderListInfo() {
  const order = useSelector(getOrder)
  const lng = useSelector(getLanguage)
  const  dispatch = useDispatch()

  return (
    <section className='OrderListInfo'>
      <form className={`OrderListInfo__form ${order.totalPrice === 0 && 'OrderListInfo__form--empty'}`}>
        {/* <img className="OrderListInfo__bg" src={bg}></img> */}
        {order.totalPrice !== 0 && <Title text={lng === 'RUS' && 'Ваш заказ' || lng === 'UKR' && 'Ваше замовлення' || lng === 'ENG' && 'Your order'} className='OrderListInfo__formTitle' />}
        {order.totalPrice === 0 ?                    
          <div className='OrderListInfo__orderEmpty'>
            {lng === 'RUS' && 'Пожалуйста, сделайте ваш заказ' || lng === 'UKR' && 'Будь ласка, зробiть ваше замовлення' || lng === 'ENG' && 'Please make your order'}
          </div> // if cart empty
          :
          <div>
            {order.chicken !== 0 && <OrderItem title={lng === 'RUS' && 'Чикен бургер' || lng === 'UKR' && 'Чікен Бургер' || lng === 'ENG' && 'Chicken burger'} count={order.chicken} price={order.chickenPrice} className='OrderListInfo__item' />}
            {order.turkey !== 0 && <OrderItem title={lng === 'RUS' && 'Бургер с индейки' || lng === 'UKR' && 'Бургер з індички' || lng === 'ENG' && 'Turkey burger'} count={order.turkey} price={order.turkeyPrice} className='OrderListInfo__item' />}
            {order.beef !== 0 && <OrderItem title={lng === 'RUS' && 'Классический бургер' || lng === 'UKR' && 'Класичний бургер' || lng === 'ENG' && 'Classic burger'} count={order.beef} price={order.beefPrice} className='OrderListInfo__item' />}
            {order.pork !== 0 && <OrderItem title={lng === 'RUS' && 'Свинной бургер' || lng === 'UKR' && 'Бургер з свинини' || lng === 'ENG' && 'Pork burger'} count={order.pork} price={order.porkPrice} className='OrderListInfo__item' />}
            <div className="OrderListInfo__price">
            {lng === 'RUS' && 'Сумма:' || lng === 'UKR' && 'Сума:' || lng === 'ENG' && 'Amount:'} {order.totalPrice} {lng === 'ENG' ? 'uah' : 'грн'}
            </div>
            <div className="OrderListInfo__btnContainer">
              <button type='button' className="OrderListInfo__btn" onClick={() => dispatch(openPopup())}>{lng === 'RUS' && 'Оформить заказ' || lng === 'UKR' && 'Оформити замовлення' || lng === 'ENG' && 'Checkout'}</button>
            </div>
          </div>
        }
      </form>
    </section>
  )
}
