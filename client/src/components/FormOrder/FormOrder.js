import React from 'react'
import { reduxForm, Field } from 'redux-form'
import TextField from '../TextField/TextField'
import { useSelector } from 'react-redux'
import './FormOrder.scss'
import { isOpenPopUp } from '../../redux/selectors/popUpSelector'
import { useDispatch } from 'react-redux'
import {openPopup} from '../../redux/actions/popUpAction'

function FormOrder({ handleSubmit, valid, submitting }) {
const isOpenPopup = useSelector(isOpenPopUp)
const dispatch = useDispatch();

  return (
    <div>
      {
      isOpenPopup && 
      <div className='formOrder' >
      <form className='formOrder__form' onSubmit={handleSubmit}>
        <button className='formOrder__btnClose' onClick={() => dispatch(openPopup())}></button>
        <div className="formOrder__content">
          <div className='formOrder__row'>
            <div className='formOrder__text'>Имя:</div>
            <Field className='formOrder__input' name='name' component={TextField} placeholder='Имя'></Field>
          </div>
          <div className='formOrder__row'>
            <div className='formOrder__text'>Телефон:</div>
            <Field className='formOrder__input' name='phone' component={TextField} placeholder='Телефон'></Field>
          </div>
          <button className='formOrder__btnSubmit' type='submit' disabled={!valid && !submitting}>Отправить</button>
        </div>
       
      </form>
    </div>
    }
    </div>
  )
}

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = ''
  }
  if (!values.phone) {
    errors.phone = ''
  }
  return errors
}


export default reduxForm({
  form: "formOrder",
  validate
})(FormOrder);