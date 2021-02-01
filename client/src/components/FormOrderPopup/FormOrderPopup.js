import React, { useState, useEffect } from 'react'
import { reduxForm, Field,formValueSelector,formValues  } from 'redux-form'
import TextField from '../TextField/TextField'
import { useSelector } from 'react-redux'
import './FormOrderPopup.scss'
import { isOpenPopUp } from '../../redux/selectors/popUpSelector'
import { useDispatch,connect } from 'react-redux'
import { openPopup } from '../../redux/actions/popUpAction'
import { getLanguage } from '../../redux/selectors/languageSelector'


function FormOrderPopup({ handleSubmit, valid, submitting }) {
  const isOpenPopup = useSelector(isOpenPopUp)
  const dispatch = useDispatch();
  const formData = useSelector(state => state.form.formOrder)
  const errors = useSelector(state => state.form.formOrder.syncErrors)
  const [nameValid, setNameValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [formValid, setFormValid] = useState(false)
  const lng = useSelector(getLanguage)

  useEffect(() => {
    if (errors) {
      if (!errors.name) {
        setNameValid(true)
      } else {
        setNameValid(false)
      }
      if (!errors.phone) {
        setPhoneValid(true)
      } else {
        setPhoneValid(false)
      }
    } else {
      setPhoneValid(true)
      setNameValid(true)
      setFormValid(true)
    }
  }, [formData])

  return (
    <div>
      {
        isOpenPopup &&
        <div className='formOrder' >
          <form className='formOrder__form' onSubmit={handleSubmit}>
            <button className='formOrder__btnClose' onClick={() => dispatch(openPopup())}></button>
            <div className="formOrder__content">
              <div className='formOrder__row'>
                <div className='formOrder__text'>{lng === 'RUS' && 'Имя:' || lng === 'UKR' && 'Iм\'я:' || lng === 'ENG' && 'Name:'}</div>
                <Field className={!nameValid ? 'formOrder__input--red formOrder__input' : 'formOrder__input'} name='name' component={TextField} placeholder={lng === 'RUS' && 'Имя' || lng === 'UKR' && 'Iм\'я' || lng === 'ENG' && 'Nam:'}></Field>
              </div>
              <div className='formOrder__row'>
                <div className='formOrder__text'>{lng === 'RUS' && 'Телефон:' || lng === 'UKR' && 'Телефон:' || lng === 'ENG' && 'Phone:'}</div>
                <Field className={!phoneValid ? 'formOrder__input--red formOrder__input' : 'formOrder__input'} name='phone' value='1' component={TextField} placeholder={lng === 'RUS' && 'Телефон' || lng === 'UKR' && 'Телефон' || lng === 'ENG' && 'Phone'}></Field>
              </div>
              <button className='formOrder__btnSubmit' type='submit' disabled={!valid && !submitting}>{lng === 'RUS' && 'Отправить' || lng === 'UKR' && 'ВІДПРАВИТИ' || lng === 'ENG' && 'Send'}</button>
            </div>
          </form>
        </div>
      }
    </div>
  )
}

const validate = values => {
  const errors = {};

  const regName = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/
  if (!regName.test(values.name)) {
    errors.name = 'Не правильное имя'
  }
  if (!values.name) {
    errors.name = 'Обязательно'
  }
  const regPhone = /^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/
  if (!regPhone.test(values.phone)) {
    errors.phone = 'Не правильный телефон'
  }
  if (!values.phone) {
    errors.phone = 'Обязательно'
  }
  return errors
}

FormOrderPopup = reduxForm({
  form: "formOrder",
  validate,
})(FormOrderPopup);

FormOrderPopup = connect(
  state => ({
    initialValues: {
      chicken: state.order.chicken,
      turkey: state.order.turkey,
      beef: state.order.beef,
      pork: state.order.pork,
      totalPrice: state.order.totalPrice,
    },
    enableReinitialize: true,
  }),
  
)(FormOrderPopup)


export default FormOrderPopup


