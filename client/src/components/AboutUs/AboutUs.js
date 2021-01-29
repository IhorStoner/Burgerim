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
              `Burgerim – это наша лаборатория по изготовлению мини-бургеров в Одессе. Мы используем только местные продукты от проверенных поставщиков, а также эксклюзивную рецептуру котлет, что позволяет нам превратить фаст-фуд в произведение кулинарного искусства. В нашем меню бургеры из 4-х видов мяса, так что каждый сможет найти свой по вкусу.
              Нежная булочка с хрустящей корочкой, свежие овощи и зелень, огурчики и горячая сочная котлета, способны разнообразить Ваш перекус, а также утолить голод. Для корпоративных клиентов - приятные скидки.  `
              || lng === 'UKR' &&
              `Burgerim - це наша лабораторія з виготовлення міні-бургерів в Одесі. Ми використовуємо тільки місцеві продукти від перевірених постачальників, а також ексклюзивну рецептуру котлет, що дозволяє нам перетворити фаст-фуд в витвір кулінарного мистецтва. У нашому меню бургери з 4-х видів м'яса, так що кожен зможе знайти свій за смаком.
              Ніжна булочка з хрусткою скоринкою, свіжі овочі та зелень, огірочки і гаряча соковита котлета, здатні урізноманітнити Ваш перекус, а також вгамувати голод. Для корпоративних клієнтів - приємні знижки.
              `
              || lng === 'ENG' &&
              `Burgerim is our mini-burgers laboratory in Odessa. We use only local products from trusted suppliers, as well as an exclusive recipe for cutlets, which allows us to turn fast food into a culinary art. Our menu includes burgers from 4 types of meat, so that everyone can find their own to taste.
              A tender bun with a crispy crust, fresh vegetables and herbs, cucumbers and a hot juicy cutlet can diversify your snack and also satisfy your hunger. For corporate clients - pleasant discounts.`
          }
        </div>
      </div>

    </div>
  )
}
