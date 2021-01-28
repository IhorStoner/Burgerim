import React, { useCallback } from 'react'
import axios from 'axios'
import FormOrderPopup from '../FormOrderPopup/FormOrderPopup.js'
import config from '../../config/default.json'
import { useDispatch, useSelector } from 'react-redux'
import { openPopup } from '../../redux/actions/popUpAction'
import { getOrder } from '../../redux/selectors/orderSelector.js'

export default function OrderPopup() {
  const dispatch = useDispatch();
  const order = useSelector(getOrder)

  const onSubmit = useCallback(async values => {
    const result = {
      name: values.name,
      phone: values.phone,
      chicken: order.chicken,
      turkey: order.turkey,
      beef: order.beef,
      pork: order.pork,
      totalPrice: order.totalPrice,
    }
    await axios.post(`${config.apiUrl}/api/orderForm`, result)
    dispatch(openPopup())
  }, [])

  return (
    <div className='container'>
      <FormOrderPopup className='orderPopup' onSubmit={order.totalPrice>0 && onSubmit} />
    </div>
  )
}