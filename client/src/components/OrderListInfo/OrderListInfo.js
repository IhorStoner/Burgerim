import React from 'react'
import './OrderListInfo.scss'
import Title from '../Title/Title'
import OrderItem from '../OrderItem/OrderItem'
import { useSelector } from 'react-redux'
import { getOrder } from '../../redux/selectors/orderSelector'
import {useDispatch} from 'react-redux'
import { openPopup } from '../../redux/actions/popUpAction'

export default function OrderListInfo() {
  const order = useSelector(getOrder)
  const  dispatch = useDispatch()
  return (
    <section className='OrderListInfo'>
      <form className="OrderListInfo__form">
        <Title text='Ваш заказ' className='OrderListInfo__formTitle' />
        {order.totalPrice === 0 ?                    
          <div>Пожалуйста сделайте ваш заказ</div> // if cart empty
          :
          <div>
            {order.chicken !== 0 && <OrderItem title={'Чикен Бургер'} count={order.chicken} price={order.chickenPrice} className='OrderListInfo__item' />}
            {order.turkey !== 0 && <OrderItem title={'Бургер из индейки'} count={order.turkey} price={order.turkeyPrice} className='OrderListInfo__item' />}
            {order.beef !== 0 && <OrderItem title={'Классический бургер'} count={order.beef} price={order.beefPrice} className='OrderListInfo__item' />}
            {order.pork !== 0 && <OrderItem title={'Свинной бургер'} count={order.pork} price={order.porkPrice} className='OrderListInfo__item' />}
            <div className="OrderListInfo__price">
              Сумма: {order.totalPrice} грн.
            </div>
            <div className="OrderListInfo__btnContainer">
              <button type='button' className="OrderListInfo__btn" onClick={() => dispatch(openPopup())}>Оформить заказ</button>
            </div>
          </div>

        }


      </form>
    </section>
  )
}
