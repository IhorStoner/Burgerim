import React from 'react'
import './Header.scss'
import { useDispatch } from 'react-redux'
import {openPopup} from '../../redux/actions/popUpAction'

export default function Header() {
const dispatch = useDispatch()

  return (
    <div className='container'>
      <div className='header'>
        <div className="header__btnsContainer">
          <button className="header__btn header__btn--orderNow" onClick={() => dispatch(openPopup())}></button>
          <button className="header__btn header__btn--joinClub"></button>
        </div>
        <div className="header__logoContainer">
          <div className="header__logoLine"></div>
          <div className="header__logo"></div>
          <div className="header__logoLine"></div>
        </div>
      </div>
    </div>

  )
}
