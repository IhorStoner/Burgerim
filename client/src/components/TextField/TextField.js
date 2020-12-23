import React from 'react'
import { Form, Label, Input } from 'semantic-ui-react';
import './TextField.scss'

function TextField({
  input,
  label,
  type,
  meta: { asyncValidating, touched, error, warning },
  ...rest
}) {

  let labelColor;

  if (error) {
    labelColor = 'red'
  } else if (warning) {
    labelColor = 'yellow'
  }
  const message = error || warning;
  return (
    <Form.Field className='formContent'>
      {touched && message &&
        <Label 
          className='formLabel'
          basic
          color={labelColor}
          pointing='top'
        >
          {message}
        </Label>
      }
      <Input
        className='formInput'
        label={label}
        type={type}
        loading={asyncValidating}
        {...input}
        {...rest}
      />

    </Form.Field>
  )
}

export default TextField;