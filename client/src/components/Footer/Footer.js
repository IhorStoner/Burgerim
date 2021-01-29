import React from 'react'
import './Footer.scss'
import { getLanguage } from '../../redux/selectors/languageSelector'
import { useSelector } from 'react-redux'

export default function Footer() {
  const lng = useSelector(getLanguage)

  return (
    <div className='footer'>
      {
        lng === 'RUS' &&
          "Burgerim - быстрая доставка вкусных и сочных бургеров в Одессе. Мы спасем Вас от голода. Для заказа звоните или оставляйте заявку на сайте."
          || lng === 'UKR' &&
          'Burgerim - швидка доставка смачних і соковитих бургерів в Одесі. Ми врятуємо Вас від голоду. Для замовлення телефонуйте або залишайте заявку на сайті.'
          || lng === 'ENG' && 
          `Burgerim - fast delivery of delicious and juicy burgers in Odessa. We will save you from hunger. To order, call or leave a request on the website.`
      }
    </div>
  )
}
