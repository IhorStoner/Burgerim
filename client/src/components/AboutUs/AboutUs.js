import React from 'react'
import { useSelector } from 'react-redux'
import { getLanguage } from '../../redux/selectors/languageSelector'
import './AboutUs.scss'

export default function AboutUs() {
  const lng = useSelector(getLanguage);

  return (
    <div className='aboutUs'>
      <div className="container">
        <div className="aboutUs__content">
          {
            lng === 'RUS' &&
              `Burgerim- это вкусные, небольшие гамбургеры по доступной цене с быстрой доставкой. Оформите заказ на нашем сайте или оставьте Ваши данные и наши менеджеры свяжутся с Вами. При заказе от 6 шт. скидка, а также для постоянных и корпоративных клиентов. 
              Burgerim – это отличный способ провести сытно корпоратив, пообедать или поужинать вкусным, сочным гамбургером в Одессе. `
              || lng === 'UKR' &&
              `Burgerim- це смачні, невеликі гамбургери за доступною ціною та з швидкою доставкою. Оформіть замовлення на нашому сайті або залиште Ваші дані і наші менеджери зв'яжуться з Вами. При замовленні від 6 шт. знижка, а також для постійних і корпоративних клієнтів.
              Burgerim - це відмінний спосіб провести ситно корпоратив, пообідати чи повечеряти смачним, соковитим гамбургером в Одесі.
              `
              || lng === 'ENG' &&
              `Burgerim is delicious, small burgers at an affordable price with fast delivery. Place an order on our website or leave your details and our managers will contact you. When ordering from 6 pcs. discount, as well as for regular and corporate clients.
              Burgerim is a great way to have a hearty corporate party, have lunch or dinner with a delicious, juicy hamburger in Odessa.`
          }
        </div>
      </div>

    </div>
  )
}
