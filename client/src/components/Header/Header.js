import React from 'react'
import './Header.scss'
import { useDispatch, useSelector } from 'react-redux'
import { openPopup } from '../../redux/actions/popUpAction'
import { changeLanguage } from '../../redux/actions/languageAction'
import { getLanguage } from '../../redux/selectors/languageSelector'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
  const dispatch = useDispatch()
  const language = useSelector(getLanguage)

  return (
    <div className='container'>
      <div className='header'>
        <div className="header__btnsContainer">
          <button className="header__btn header__btn--orderNow" onClick={() => dispatch(openPopup())}></button>
          <Link
           smooth={true}
           duration={500}
           spy={true}
           offset={-70}
           to='burgers' 
           className="header__btn header__btn--joinClub"
           />
        </div>
        <div className="header__logoContainer">
          <div className="header__logoLine"></div>
          <a href='/index.html' className="header__logo"></a>
          <div className="header__logoLine"></div>
        </div>
        <div className="header__lang-container ">
          <button className="header__lang-btn" onClick={() => dispatch(changeLanguage())}>{language === 'UKR' ? 'RU' : 'UKR'}</button>
          {/* <button onClick={() => dispatch(changeLanguage())}>UA</button> */}
        </div>
      </div>
    </div>

  )
}
