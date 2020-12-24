import React from 'react'
import './Title.scss'

export default function Title({text,name, className}) {
  return (
    <div className="titleContainer">
      <a name={name}><h1 className={`title ${className}`}>{text}</h1></a>
    </div>
  )
}
