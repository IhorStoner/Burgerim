import React, { useCallback, useState } from 'react'
import axios from 'axios'
import FormOrder from '../FormOrder/FormOrder.js'
import config from '../../config/default.json'
import { useDispatch } from 'react-redux'
import {openPopup} from '../../redux/actions/popUpAction'

export default function OrderPopup() {
  const dispatch = useDispatch();

  const onSubmit = useCallback(async values => {
    await axios.post(`${config.apiUrl}/api/orderForm`,values)
    dispatch(openPopup)
  },[])
  
  return (
    <div className='container'>
      <FormOrder className='orderPopup' onSubmit={onSubmit}/>
    </div>
  )
}