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
          "Burgerim - быстрая доставка вкусных и сочных бургеров в Одессе. Для заказа звоните или оставляйте заявку на сайте, и наши менеджеры свяжутся с Вами. Burgerim – это отличный способ провести сытно корпоратив, пообедать или поужинать вкусным, сочным гамбургером в Одессе."
          || lng === 'UKR' &&
          'Burgerim - швидка доставка смачних і соковитих бургерів в Одесі. Для замовлення телефонуйте або залишайте заявку на сайті, і наші менеджери зв\'яжуться з Вами. Burgerim - це відмінний спосіб провести ситно корпоратив, пообідати чи повечеряти смачним, соковитим гамбургером в Одесі.'
          || lng === 'ENG' && 
          `Burgerim - fast delivery of delicious and juicy burgers in Odessa. To order, call or leave a request on the website, and our managers will contact you. Burgerim is a great way to have a hearty corporate party, have lunch or dinner with a delicious, juicy hamburger in Odessa.`
      }
    </div>
  )
}
