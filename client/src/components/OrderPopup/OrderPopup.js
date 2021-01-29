import React, { useCallback } from 'react'
import axios from 'axios'
import FormOrderPopup from '../FormOrderPopup/FormOrderPopup.js'
import config from '../../config/default.json'
import { useDispatch, useSelector } from 'react-redux'
import { openPopup } from '../../redux/actions/popUpAction'


export default function OrderPopup() {
  const dispatch = useDispatch();

  const onSubmit = useCallback(async values => {
    console.log(values)
    await axios.post(`${config.apiUrl}/api/orderForm`, values).then(res => {
      localStorage.removeItem('burgerimCart')
      // dispatch(openPopup())
      window.location.reload();
    })
  }, [])

  return (
    <div className='container'>
      <FormOrderPopup className='orderPopup' onSubmit={onSubmit} />
    </div>
  )
}