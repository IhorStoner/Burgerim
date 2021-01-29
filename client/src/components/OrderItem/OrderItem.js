import React from 'react'
import { getLanguage } from '../../redux/selectors/languageSelector'
import './OrderItem.scss'
import { useSelector } from 'react-redux'

export default function OrderItem({title, count,price,className}) {
  const lng = useSelector(getLanguage)

  return (
    <div className={`OrderItem ${className}`}>
      <h2 className='OrderItem__title'>{title}</h2>
      <span className="OrderItem__count">{lng === 'ENG' ? 'for' : 'за'} {count} {lng === 'ENG' ? 'pcs' : 'шт.'}</span>
      <span className="OrderItem__price">{price} {lng === 'ENG' ? 'uah' : 'грн'}</span>
    </div>
  )
}
