import React, { Component } from 'react';
import { ACTIONS } from '../helpers/action-options'
import { MODELS } from '../helpers/model-options'
import PropTypes from 'prop-types'
import { signup } from '../api/user'

class FormSelector extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: null,
        email: null,
        password: null,
      },
      userFeedbackMessage: {
        show: false,
        message: '',
        color: ''
      }
    }
  }

  submit(){
    signup(this.state.form).catch(message => {
      this.setState({
        userFeedbackMessage: {
          show: true,
          message,
          color: 'red'
        }
      })
    }).then(() => {
      this.setState({
        userFeedbackMessage: {
          show: true,
          message: 'Usuário criado com sucesso',
          color: 'green'
        }
      })
    })
  }

  setFormFieldValue(fieldKey, event){
    event.preventDefault()
    const form = { ...this.state.form }
    this.setState({ form: {...form, [fieldKey]: event.target.value }})
  }

  render() {
    const { show, message, color } = this.state.userFeedbackMessage
    return (
      <div>
        <div className="FormFeedbackMessage" style={{ color, display: show ? null : 'none' }}>
          {message}
        </div>
        <div className="Form">
          <div>
            <label>Seu nome:</label>
            <input type="text" onChange={e => this.setFormFieldValue('name', e)}/>
          </div>
          <div>
            <label>Seu email:</label>
            <input type="email" onChange={e => this.setFormFieldValue('email', e)}/>
          </div>
          <div>
            <label>Sua senha:</label>
            <input type="password" onChange={e => this.setFormFieldValue('password', e)}/>
          </div>
        </div>
        <div className="FormSubmitionDiv">
          <button onClick={() => this.submit()}>
            Salvar
          </button>
        </div>
      </div>
    )
  }
}

FormSelector.propTypes = {
  action: PropTypes.oneOf(Object.values(ACTIONS)) ,
  model: PropTypes.oneOf(Object.values(MODELS)),
}

export default FormSelector;
