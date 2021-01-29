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
          <Link
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            to='burgers'
            className={` header__btn  ${language === 'RUS' && "header__btn--orderNow"} ${language === 'UKR' && 'header__btn--orderUkr'} ${language === 'ENG' && 'header__btn--orderEng'}`}
          />
         
          <Link
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            to='burgers'
            className={`header__btn ${language === 'ENG' ? 'header__btn--joinClubEng' : 'header__btn--joinClub'}`}
          />
        </div>
        <div className="header__logoContainer">
          <div className="header__logoLine"></div>
          <a href='/index.html' className="header__logo"></a>
          <div className="header__logoLine"></div>
        </div>
        <div className="header__lang-container ">
          <div className="header__selectedLang">{language}</div>
          <ul className="header__langList">
            <li className={`header__langItem ${language === 'RUS' && 'header__langItem--active'}`} onClick={() => dispatch(changeLanguage('RUS'))}>RUS</li>
            <li className={`header__langItem ${language === 'UKR' && 'header__langItem--active'}`} onClick={() => dispatch(changeLanguage('UKR'))}>UKR</li>
            <li className={`header__langItem ${language === 'ENG' && 'header__langItem--active'}`} onClick={() => dispatch(changeLanguage('ENG'))}>ENG</li>
          </ul>
          {/* <button className="header__lang-btn" onClick={() => dispatch(changeLanguage())}>{language === 'UKR' ? 'RU' : 'UKR'}</button> */}
          {/* <button onClick={() => dispatch(changeLanguage())}>UA</button> */}
        </div>
      </div>
    </div>

  )
}
