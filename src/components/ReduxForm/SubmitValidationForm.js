import React from 'react'
import { Field, reduxForm } from 'redux-form'
// import submit from './submit'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { connect } from 'react-redux'
import { fetchServer } from '../../actions'

const renderField = ({ input, label, type, meta: { touched, error } }) =>
  <div>
    <FormGroup>
        <Label>
          {label}
        </Label>
        <div>
          <Input {...input} placeholder={label} type={type} />
          {touched &&
            error &&
            <span>
              {error}
            </span>}
        </div>
    </FormGroup>
  </div>

let SubmitValidationForm = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props

  // console.log("props")
  // console.log(props)
  return (
    <Form onSubmit={handleSubmit(props.fetchServer)}>
      <Field
        name="title"
        type="text"
        component={renderField}
        label="username"
      />
      <Field
        name="body"
        type="password"
        component={renderField}
        label="password"
      />
      <Field
        name="userId"
        type="number"
        component={renderField}
        label="userId"
      />
      {error &&
        <strong>
          {error}
        </strong>}
      <div>
        <Button color="success"  type="submit" disabled={submitting}>
          Log In
        </Button>
        <Button color="danger"  type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </div>
    </Form>
  )
}

const mapStateToProps = state => {
  // console.log("state")
  // console.log(state)
  return {
    serverData: state
  }
}

const mapDispatchToProps = dispatch => {
  // console.log("dispatch")
  // console.log(dispatch)
  return {
    fetchServer: (values) => dispatch(fetchServer(values))
  }
}

SubmitValidationForm = reduxForm({
  form: 'submitValidation' // a unique identifier for this form
})(SubmitValidationForm)  

export default SubmitValidationForm = connect(mapStateToProps, mapDispatchToProps)(SubmitValidationForm)
