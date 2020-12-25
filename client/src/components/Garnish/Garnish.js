import React from 'react'
import Title from '../Title/Title'
import './Garnish.scss'
import potatos from '../../assets/png/potatos.png'
import { useSelector } from 'react-redux'
import { getLanguage } from '../../redux/selectors/languageSelector'

export default function Garnish() {
  const language = useSelector(getLanguage)
  return (
    <div className='garnish'>
      <Title text={language === 'RU' ? 'Гарниры' : 'Гарніри'} />
      <div className='garnish__content'>
        <div className="garnish__item">
          <img src={potatos} alt="картошка фри" className="garnish__img" />
          <div className="garnish__textContainer">
            <h2 className="garnish__text">{language === 'RU' ? 'Хрустящий картофель фри' : 'Хрустка картопля фрі'}</h2>
            <p className="garnish__subText">{language === 'RU' ? 'подается с соусом' : 'подається з соусом'}</p>
            <span className="garnish__price">30 грн</span>
          </div>
        </div>
      </div>
    </div>
  )
}
