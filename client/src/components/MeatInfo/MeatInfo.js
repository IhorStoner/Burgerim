import React from 'react'
import Title from '../Title/Title'
import './MeatInfo.scss'
import chiken from '../../assets/png/chiken.png'
import turkey from '../../assets/png/turkey.png'
import cow from '../../assets/png/cow.png'
import pig from '../../assets/png/pig.png'
import { useSelector } from 'react-redux'
import { getLanguage } from '../../redux/selectors/languageSelector'

export default function MeatInfo() {
  const language = useSelector(getLanguage)

  return (
    <div className='meatInfo'>
      <Title text={language === 'RU' ? 'Вы можете выбрать сет только из одного вида мяса' : 'Ви можете обрати сет тільки з одного виду м\'яса'} className='meatInfo__title' />
      <p className='meatInfo__text'>{language === 'RU' ? 'Все наши бургеры готовятся на мангале!' : 'Всі наші бургери готуються на мангалі!'}</p>
      <div className="meatInfo__content">
        <div className="meatInfo__item">
          <div className="meatInfo__imgContainer">
            <img src={chiken} alt="курица" className="meatInfo__img" />
          </div>
          <p className="meatInfo__itemText">
            {language === 'RU' ? 'Сочная куриная котлета с добавлением специй' : 'Соковита куряча котлета з додаванням спецій'} 
          </p>
        </div>
        <div className="meatInfo__item">
          <img src={turkey} alt="индейка" className="meatInfo__img" />
          <p className="meatInfo__itemText">
            {language === 'RU' ? 'Диетическая котлета для вашего burgerim из индейки' : 'Дієтична котлета для вашого burgerim з індички'} 
          </p>
        </div>
        <div className="meatInfo__item">
          <img src={cow} alt="говядина" className="meatInfo__img" />
          <p className="meatInfo__itemText">
            {language === 'RU' ? 'Аппетитная котлета из говядины' : 'Апетитна котлета з яловичини'} 
          </p>
        </div>
        <div className="meatInfo__item">
          <img src={pig} alt="свинина" className="meatInfo__img" />
          <p className="meatInfo__itemText">
            {language === 'RU' ? 'Сытная котлета для burgerims из свинины' : 'Ситна котлета для burgerims зі свинини'} 
          </p>
        </div>
      </div>
    </div>
  )
}
