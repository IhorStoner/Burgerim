import React from 'react'
import Title from '../Title/Title'
import cola from '../../assets/png/cola.png'
import fanta from '../../assets/png/fanta.png'
import juice from '../../assets/png/juice.png'
import water1 from '../../assets/png/water1.png'
import water2 from '../../assets/png/water2.png'
import sprite from '../../assets/png/sprite.png'
import './Drinks.scss'
import { useSelector } from 'react-redux'
import { getLanguage } from '../../redux/selectors/languageSelector'

export default function Drinks() {
  const lng = useSelector(getLanguage)

  return (
    <div className='drinks'>
      <Title text={lng === 'RUS' && 'Напитки' || lng === 'UKR' && 'Напої' || lng === 'ENG' && 'Drinks'} />
      <div className="drinks__content">
        <div className="drinks__item">
          <img src={cola} alt="Кока кола" className="drinks__img" />
          <div className="drinks__textContainer">
            <h2 className="drinks__title">Coca-Cola</h2>
            <p className="drinks__text">{lng === 'RUS' && '0.5 л' || lng === 'UKR' && '0.5 л' || lng === 'ENG' && '0.5 l'}</p>
            <span className="drinks__price">15 {lng === 'ENG' ? 'uah' : 'грн'}</span>
          </div>
        </div>
        <div className="drinks__item">
          <img src={sprite} alt="Спрайт" className="drinks__img" />
          <div className="drinks__textContainer">
            <h2 className="drinks__title">Sprite</h2>
            <p className="drinks__text">{lng === 'RUS' && '0.5 л' || lng === 'UKR' && '0.5 л' || lng === 'ENG' && '0.5 l'}</p>
            <span className="drinks__price">15 {lng === 'ENG' ? 'uah' : 'грн'}</span>
          </div>
        </div>
        <div className="drinks__item">
          <img src={fanta} alt="Фанта" className="drinks__img" />
          <div className="drinks__textContainer">
            <h2 className="drinks__title">Fanta</h2>
            <p className="drinks__text">{lng === 'RUS' && '0.5 л' || lng === 'UKR' && '0.5 л' || lng === 'ENG' && '0.5 l'}</p>
            <span className="drinks__price">15 {lng === 'ENG' ? 'uah' : 'грн'}</span>
          </div>
        </div>
        <div className="drinks__item">
          <img src={juice} alt="Соки" className="drinks__img" />
          <div className="drinks__textContainer">
            <h2 className="drinks__title">{lng === 'RUS' && 'Соки' || lng === 'UKR' && 'Соки' || lng === 'ENG' && 'Juices'}</h2>
            <p className="drinks__text">{lng === 'RUS' && 'в ассортименте' || lng === 'UKR' && 'в асортименті' || lng === 'ENG' && 'in assortment'}</p>
            <span className="drinks__price">15 {lng === 'ENG' ? 'uah' : 'грн'}</span>
          </div>
        </div>
        <div className="drinks__item">
          <img src={water1} alt="Моршинська без газа" className="drinks__img" />
          <div className="drinks__textContainer">
            <h2 className="drinks__title">{lng === 'RUS' && 'Моршинская' || lng === 'UKR' && 'Моршинська' || lng === 'ENG' && 'Morshinskaya'}</h2>
            <p className="drinks__text">{lng === 'RUS' && '0.5 л б.г.' || lng === 'UKR' && '0.5 л б.г.' || lng === 'ENG' && '0.5 l still water'}</p>
            <span className="drinks__price">15 {lng === 'ENG' ? 'uah' : 'грн'}</span>
          </div>
        </div>
        <div className="drinks__item">
          <img src={water2} alt="Моршинська сильногазована" className="drinks__img" />
          <div className="drinks__textContainer">
            <h2 className="drinks__title">{lng === 'RUS' && 'Моршинская' || lng === 'UKR' && 'Моршинська' || lng === 'ENG' && 'Morshinskaya'}</h2>
            <p className="drinks__text">{lng === 'RUS' && '0.5 л с.г.' || lng === 'UKR' && '0.5 л с.г.' || lng === 'ENG' && '0.5 l carbonated'}</p>
            <span className="drinks__price">15 {lng === 'ENG' ? 'uah' : 'грн'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
