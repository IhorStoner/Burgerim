import React from 'react'
import Title from '../Title/Title'
import './MeatInfo.scss'
import chiken from '../../assets/png/chiken.png'
import turkey from '../../assets/png/turkey.png'
import cow from '../../assets/png/cow.png'
import pig from '../../assets/png/pig.png'

export default function MeatInfo() {
  return (
    <div className='meatInfo'>
      <Title text='Вы можете выбрать сет только из одного вида мяса' className='meatInfo__title' />
      <p className='meatInfo__text'>Все наши бургеры готовятся на мангале!</p>
      <div className="meatInfo__content">
        <div className="meatInfo__item">
          <div className="meatInfo__imgContainer">
            <img src={chiken} alt="курица" className="meatInfo__img" />
          </div>

          <p className="meatInfo__itemText">
            Сочная куриная котлета с добавлением специй
          </p>
        </div>
        <div className="meatInfo__item">
          <img src={turkey} alt="индейка" className="meatInfo__img" />
          <p className="meatInfo__itemText">
            Диетическая котлета для вашего burgerim из индейки
          </p>
        </div>
        <div className="meatInfo__item">
          <img src={cow} alt="говядина" className="meatInfo__img" />
          <p className="meatInfo__itemText">
            Аппетитная котлета из говядины
          </p>
        </div>
        <div className="meatInfo__item">
          <img src={pig} alt="свинина" className="meatInfo__img" />
          <p className="meatInfo__itemText">
            Сытная котлета для burgerims из свинины
          </p>
        </div>
      </div>
    </div>
  )
}
