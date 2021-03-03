import React, { useState } from 'react'
import './InputNumber.scss'
import { useDispatch } from 'react-redux'

export default function InputNumber({ action, defaultVal, className, val }) {
  const [value, setValue] = useState(defaultVal)
  const dispatch = useDispatch()
  const min = 0;
  const max = 100;

  const handleChangeInput = (e) => {
    const inputValue = e.target.value;
    if (inputValue < min || inputValue > max) {
      return
    } else if (value === min) {
      setValue(' ')
      dispatch(action(''))
    } else {
      setValue(+inputValue)
      dispatch(action(+inputValue))
    }

  }

  const handleBtnPlus = () => {
    if (value === max) {
      dispatch(action(min))
      setValue(min)
    }
    if (value < max) {
      dispatch(action(value + 1))
      setValue(value + 1)
    }
  }

  const handleBtnMinus = () => {
    if (value === min) {
      setValue(max)
      dispatch(action(max))
    }
    if (value > min) {
      dispatch(action(value - 1))
      setValue(value - 1)
    }
  }

  return (
    <div className={`InputNumber ${className}`}>
      <input className='InputNumber__input' type="number" minlength="0" defaultValue={defaultVal} value={val} onChange={(e) => handleChangeInput(e)} />
      <div className="InputNumber__btnContainer">
        <button className="InputNumber__btn InputNumber__btn--top"
          onMouseDown={(e) => e.target.style.backgroundColor = '#000'}
          onMouseUp={(e) => e.target.style.backgroundColor = '#C4C4C4'}
          onClick={() => handleBtnPlus()}
        />
        <button className="InputNumber__btn InputNumber__btn--bot"
          onMouseDown={(e) => e.target.style.backgroundColor = '#000'}
          onMouseUp={(e) => e.target.style.backgroundColor = '#C4C4C4'}
          onClick={() => handleBtnMinus()}
        />
      </div>
    </div>
  )
}
