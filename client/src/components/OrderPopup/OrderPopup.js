import React, { useCallback } from 'react'
import axios from 'axios'
import FormOrderPopup from '../FormOrderPopup/FormOrderPopup.js'
import config from '../../config/default.json'
import { useDispatch } from 'react-redux'
import { openPopup,orderSuccess } from '../../redux/actions/popUpAction'
import {clearOrder} from '../../redux/actions/orderAction'


export default function OrderPopup() {
  const dispatch = useDispatch();

  const onSubmit = useCallback(async values => {
    await axios.post(`${config.apiUrl}/api/orderForm`, values).then(res => {
      localStorage.removeItem('burgerimCart')
      dispatch(openPopup())
      dispatch(clearOrder())
      dispatch(orderSuccess(true))
    })
  }, [])

  return (
    <div className='container'>
      <FormOrderPopup className='orderPopup' onSubmit={onSubmit} />
    </div>
  )
}