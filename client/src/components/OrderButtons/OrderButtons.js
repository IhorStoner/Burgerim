import React from 'react'
import './OrderButtons.scss'
import { useDispatch, useSelector } from 'react-redux'
import { openPopup } from '../../redux/actions/popUpAction'
import { getLanguage } from '../../redux/selectors/languageSelector';
import { Link, animateScroll as scroll } from "react-scroll";

export default function OrderButtons() {
  const dispatch = useDispatch();
  const language = useSelector(getLanguage)

  return (
    <div className="container">
      <div className='orderBtns'>
        <div className="orderBtns__btnContainer">
          <Link 
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          to='burgers' className="orderBtns__btn orderBtns__btn--yellow"/>
        </div>
        <div className="orderBtns__btnContainer"><button className={language === 'RU' ? 'orderBtns__btn orderBtns__btn--brown' : 'orderBtns__btn orderBtns__btn--ukrBrown'} onClick={() => dispatch(openPopup())}></button></div>
        <div className="orderBtns__btnContainer"><a className={language === 'RU' ? 'orderBtns__btn orderBtns__btn--green' : 'orderBtns__btn orderBtns__btn--greenUkr'}></a></div>
      </div>
      <div className="orderBtnsMobile">
        <div className="orderBtnsMobile__btnContainer">
          <button className={language === 'RU' ? "orderBtnsMobile__btn orderBtnsMobile__btn--brown" : "orderBtnsMobile__btn orderBtnsMobile__btn--brownUkr"} onClick={() => dispatch(openPopup())}></button>
        </div>
        <div className="orderBtnsMobile__btnContainer">
          <Link smooth={true} duration={500} spy={true} offset={-70} to='burgers' className="orderBtnsMobile__btn orderBtnsMobile__btn--yellow"/>
        </div>
        <div className="orderBtnsMobile__btnContainer">
          <a className={language === 'RU' ? "orderBtnsMobile__btn orderBtnsMobile__btn--green" : "orderBtnsMobile__btn orderBtnsMobile__btn--greenUkr"} href='tel:+380965136694'></a>
        </div>
      </div>
    </div>
  )
}
