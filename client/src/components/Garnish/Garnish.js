import React from 'react'
import Title from '../Title/Title'
import './Garnish.scss'
import potatos from '../../assets/png/potatos.png'

export default function Garnish() {
  return (
    <div className='garnish'>
      <Title text='Гарниры'/>
      <div className='garnish__content'>
        <div className="garnish__item">
          <img src={potatos} alt="картошка фри" className="garnish__img"/>
          <div className="garnish__textContainer">
            <h2 className="garnish__text">Хрустящий картофель фри</h2>
            <p className="garnish__subText">подается с соусом</p>
            <span className="garnish__price">30 грн</span>
          </div>
        </div>
      </div>
    </div>
  )
}
