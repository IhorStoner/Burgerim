import React from 'react'
import './OrderButtons.scss'
import { useDispatch, useSelector } from 'react-redux'
import { openPopup } from '../../redux/actions/popUpAction'
import { getLanguage } from '../../redux/selectors/languageSelector';
import { Link, animateScroll as scroll } from "react-scroll";

export default function OrderButtons() {
  const dispatch = useDispatch();
  const lng = useSelector(getLanguage)

  return (
    <div className="container">
      <div className='orderBtns'>
        <div className="orderBtns__btnContainer">
          <Link 
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          to='burgers' className={`orderBtns__btn ${lng === 'ENG' ? 'orderBtns__btn--yellowEng' : 'orderBtns__btn--yellow'}`}/>
        </div>
        <div className="orderBtns__btnContainer"><Link smooth={true} duration={500} spy={true} offset={-70} to='burgers' className={`orderBtns__btn ${lng === 'RUS' && 'orderBtns__btn--brown' || lng === 'UKR' && 'orderBtns__btn--ukrBrown' || lng === 'ENG' && 'orderBtns__btn--brownEng'}`} /></div>
        <div className="orderBtns__btnContainer"><a className={`orderBtns__btn ${lng === 'RUS' && 'orderBtns__btn--green' || lng === 'UKR' && 'orderBtns__btn--greenUkr' || lng === 'ENG' && 'orderBtns__btn--greenEng'}`}></a></div>
      </div>
      <div className="orderBtnsMobile">
        <div className="orderBtnsMobile__btnContainer">
          <Link smooth={true} duration={500} spy={true} offset={-70} to='burgers' className={lng === 'RU' ? "orderBtnsMobile__btn orderBtnsMobile__btn--brown" : "orderBtnsMobile__btn orderBtnsMobile__btn--brownUkr"} />
        </div>
        <div className="orderBtnsMobile__btnContainer">
          <Link smooth={true} duration={500} spy={true} offset={-70} to='burgers' className="orderBtnsMobile__btn orderBtnsMobile__btn--yellow"/>
        </div>
        <div className="orderBtnsMobile__btnContainer">
          <a className={lng === 'RU' ? "orderBtnsMobile__btn orderBtnsMobile__btn--green" : "orderBtnsMobile__btn orderBtnsMobile__btn--greenUkr"} href='tel:+380965136694'></a>
        </div>
      </div>
    </div>
  )
}
