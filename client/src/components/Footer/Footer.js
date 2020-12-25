import React from 'react'
import './Footer.scss'
import { getLanguage } from '../../redux/selectors/languageSelector'
import { useSelector } from 'react-redux'

export default function Footer() {
  const language = useSelector(getLanguage)

  return (
    <div className='footer'>
      <div className="container">
        {
          language === 'RU' ?
          'Burgerim - быстрая доставка вкусных и сочных бургеров в Одессе. Заказывайте сеты бургеров по 2, 3, 8 и 16 шт в упаковке - детям в школу, на обед в офис или в дорогу. Звоните или оставляйте заявку на сайте.'
          :
          'Burgerim - швидка доставка смачних і соковитих бургерів в Одесі. Замовляйте сети бургерів по 2, 3, 8 і 16 шт в упаковці - дітям до школи, на обід в офіс або в дорогу. Телефонуйте або залишайте заявку на сайті.'
        }
      </div>
    </div>
  )
}
