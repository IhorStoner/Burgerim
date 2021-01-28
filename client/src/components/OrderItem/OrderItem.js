import React from 'react'
import './OrderItem.scss'

export default function OrderItem({title, count,price,className}) {
  return (
    <div className={`OrderItem ${className}`}>
      <h2 className='OrderItem__title'>{title}</h2>
      <span className="OrderItem__count">за {count} шт.</span>
      <span className="OrderItem__price">{price} грн</span>
    </div>
  )
}
