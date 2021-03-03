import React, { useEffect, useState } from 'react'
import './OrderListInfo.scss'
import { useSelector } from 'react-redux'
import { getOrder } from '../../redux/selectors/orderSelector'
import { useDispatch } from 'react-redux'
import { openPopup, orderSuccess } from '../../redux/actions/popUpAction'
import { getLanguage } from '../../redux/selectors/languageSelector'
import { getOrderSuccess } from '../../redux/selectors/popUpSelector'


export default function OrderListInfo() {
  const order = useSelector(getOrder)
  const lng = useSelector(getLanguage)
  const dispatch = useDispatch()
  const isOrderSuccess = useSelector(getOrderSuccess)
  const [isWarningOpen, setIsWarningOpen] = useState(false)
  const [warning, setWarning] = useState(false)
  useEffect(() => {
    dispatch(orderSuccess(false))
    setIsWarningOpen(false)
  }, [order])

  const handleSubmitClick = () => {
    if (order.totalPrice < 60) { setIsWarningOpen(true); setWarning(true) }
    if (order.totalPrice >= 60) { dispatch(openPopup()); setWarning(false) }
  }

  return (
    <section className='OrderListInfo'>
      <form className={`OrderListInfo__form ${order.totalPrice === 0 && 'OrderListInfo__form--empty'}`}>

        <div className="OrderListInfo__price">
          {lng === 'RUS' && 'Сумма:' || lng === 'UKR' && 'Сума:' || lng === 'ENG' && 'Amount:'} {order.totalPrice} {lng === 'ENG' ? 'uah' : 'грн'}
        </div>
        <div className="OrderListInfo__btnContainer">
          <button type='button' className="OrderListInfo__btn" onClick={() => handleSubmitClick()}>{lng === 'RUS' && 'Оформить заказ' || lng === 'UKR' && 'Оформити замовлення' || lng === 'ENG' && 'Checkout'}</button>
          {warning ? <div className="OrderListInfo__warning">
            {lng === 'RUS' && 'Минимальный заказ 60 грн' || lng === 'UKR' && ' Mінімальне замовлення 60 грн' || lng === 'ENG' && 'minimum order 60 uah'}
          </div> : null}
        </div>

      </form>
    </section>
  )
}
