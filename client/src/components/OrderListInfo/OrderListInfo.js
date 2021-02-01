import React, { useEffect } from 'react'
import './OrderListInfo.scss'
import Title from '../Title/Title'
import OrderItem from '../OrderItem/OrderItem'
import { useSelector } from 'react-redux'
import { getOrder } from '../../redux/selectors/orderSelector'
import { useDispatch } from 'react-redux'
import { openPopup,orderSuccess } from '../../redux/actions/popUpAction'
import { getLanguage } from '../../redux/selectors/languageSelector'
import { getOrderSuccess } from '../../redux/selectors/popUpSelector'


export default function OrderListInfo() {
  const order = useSelector(getOrder)
  const lng = useSelector(getLanguage)
  const dispatch = useDispatch()
  const isOrderSuccess = useSelector(getOrderSuccess)

  useEffect(() => {
    dispatch(orderSuccess(false))
  }, [order])

  return (
    <section className='OrderListInfo'>
      <form className={`OrderListInfo__form ${order.totalPrice === 0 && 'OrderListInfo__form--empty'}`}>
        {/* <img className="OrderListInfo__bg" src={bg}></img> */}
        {order.totalPrice !== 0 && <Title text={lng === 'RUS' && 'Ваш заказ' || lng === 'UKR' && 'Ваше замовлення' || lng === 'ENG' && 'Your order'} className='OrderListInfo__formTitle' />}
        {order.totalPrice === 0 ?
          <div className='OrderListInfo__orderEmpty'>
            {!isOrderSuccess && lng === 'RUS' && 'Пожалуйста, сделайте ваш заказ' || lng === 'UKR' && 'Будь ласка, зробiть ваше замовлення' || lng === 'ENG' && 'Please make your order'}
            {isOrderSuccess &&
              <div >
                {lng === 'RUS' && 'Ваш заказ подтвержден,оператор скоро свяжется с вами.' || lng === 'UKR' && 'Ваше замовлення підтверджено,оператор скоро зв\'яжеться з вами.' || lng === 'ENG' && 'Your order has been confirmed,the operator will contact you shortly.'}
                <div>
                  <svg width="72" height="70" viewBox="0 0 72 70" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="72" height="70">
                      <rect width="71.6598" height="69.51" fill="url(#pattern0)" />
                    </mask>
                    <g mask="url(#mask0)">
                      <rect width="71.6598" height="69.51" fill="#72B847" />
                    </g>
                    <defs>
                      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0" transform="translate(0 -0.0154639) scale(0.00195312)" />
                      </pattern>
                      <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0" transform="translate(0 -0.0154639) scale(0.00195312)" />
                      </pattern>
                      <image id="image0" width="512" height="512" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAABD+AAAQ/gE0Op1AAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAwBQTFRF////AQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACl5/7/AAAAP90Uk5TAAECAwQF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" />
                    </defs>
                  </svg>

                </div>
              </div>
            }


          </div> // if cart empty
          :
          <div>
            <div className='OrderListInfo__items'>
              {order.chicken !== 0 && <OrderItem title={lng === 'RUS' && 'Чикен бургер' || lng === 'UKR' && 'Чікен Бургер' || lng === 'ENG' && 'Chicken burger'} count={order.chicken} price={order.chickenPrice} className='OrderListInfo__item' />}
              {order.turkey !== 0 && <OrderItem title={lng === 'RUS' && 'Бургер с индейки' || lng === 'UKR' && 'Бургер з індички' || lng === 'ENG' && 'Turkey burger'} count={order.turkey} price={order.turkeyPrice} className='OrderListInfo__item' />}
              {order.beef !== 0 && <OrderItem title={lng === 'RUS' && 'Классический бургер' || lng === 'UKR' && 'Класичний бургер' || lng === 'ENG' && 'Classic burger'} count={order.beef} price={order.beefPrice} className='OrderListInfo__item' />}
              {order.pork !== 0 && <OrderItem title={lng === 'RUS' && 'Свинной бургер' || lng === 'UKR' && 'Бургер з свинини' || lng === 'ENG' && 'Pork burger'} count={order.pork} price={order.porkPrice} className='OrderListInfo__item' />}

            </div>
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
