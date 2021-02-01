import React from 'react'
import './OrderButtons.scss'
import { useSelector } from 'react-redux'
import { getLanguage } from '../../redux/selectors/languageSelector';
import { Link } from "react-scroll";

export default function OrderButtons() {

  const lng = useSelector(getLanguage)

  return (
    <div className="container">
      <div className='orderBtns'>
        <div className="orderBtns__btnContainer">
          <Link 
          href='#!'
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          to='burgers' className={`orderBtns__btn ${lng === 'ENG' ? 'orderBtns__btn--yellowEng' : 'orderBtns__btn--yellow'}`}/>
        </div>
        <div className="orderBtns__btnContainer"><Link href='#!' smooth={true} duration={500} spy={true} offset={-70} to='burgers' className={`orderBtns__btn ${lng === 'RUS' && 'orderBtns__btn--brown' || lng === 'UKR' && 'orderBtns__btn--ukrBrown' || lng === 'ENG' && 'orderBtns__btn--brownEng'}`} /></div>
        <div className="orderBtns__btnContainer"><a href='#!' className={`orderBtns__btn ${lng === 'RUS' && 'orderBtns__btn--green' || lng === 'UKR' && 'orderBtns__btn--greenUkr' || lng === 'ENG' && 'orderBtns__btn--greenEng'}`}></a></div>
      </div>
      <div className="orderBtnsMobile">
        <div className="orderBtnsMobile__btnContainer">
          <Link href='#!' smooth={true} duration={500} spy={true} offset={-70} to='burgers' className={lng === 'RUS' && "orderBtnsMobile__btn orderBtnsMobile__btn--brown" || lng === 'UKR' && "orderBtnsMobile__btn orderBtnsMobile__btn--brownUkr" || lng === 'ENG' && "orderBtnsMobile__btn orderBtnsMobile__btn--brownEngMob"} />
        </div>
        <div className="orderBtnsMobile__btnContainer">
          <Link href='#!' smooth={true} duration={500} spy={true} offset={-70} to='burgers' className={`orderBtnsMobile__btn ${lng === 'ENG' ? 'orderBtnsMobile__btn--yellowMobEng' : 'orderBtnsMobile__btn--yellow'}`}/>
        </div>
        <div className="orderBtnsMobile__btnContainer">
          <a className={lng === 'RUS' && "orderBtnsMobile__btn orderBtnsMobile__btn--green" || lng === 'UKR' && "orderBtnsMobile__btn orderBtnsMobile__btn--greenUkr" || lng === 'ENG' && 'orderBtnsMobile__btn orderBtnsMobile__btn--greenEng'} href='tel:+380965136694'></a>
        </div>
      </div>
    </div>
  )
}
