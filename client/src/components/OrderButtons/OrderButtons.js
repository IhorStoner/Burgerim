import React from 'react'
import './OrderButtons.scss'
import { useDispatch } from 'react-redux'
import { openPopup } from '../../redux/actions/popUpAction'

export default function OrderButtons() {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className='orderBtns'>
        <div className="orderBtns__btnContainer"><button className="orderBtns__btn orderBtns__btn--yellow"></button></div>
        <div className="orderBtns__btnContainer"><button className="orderBtns__btn orderBtns__btn--brown" onClick={() => dispatch(openPopup())}></button></div>
        <div className="orderBtns__btnContainer"><a className="orderBtns__btn orderBtns__btn--green" href='tel:+1234567890'></a></div>
      </div>
    </div>
  )
}
