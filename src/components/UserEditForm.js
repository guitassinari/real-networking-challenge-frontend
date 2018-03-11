import React, { Component } from 'react';
import { signin, update, destroy } from '../api/user'
import CurrentUser from '../api/currentUser'

class SigninForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      loginForm: {
        email: '',
        password: '',
      },
      userForm: {
        name: '',
        password: '',
      },
      userFeedbackMessage: {
        show: false,
        message: '',
        color: ''
      },
      userIsLogged: CurrentUser.logged()
    }
  }

  submitSignin(e){
    e.preventDefault()
    signin(this.state.loginForm).then(jwt => {
      CurrentUser.set(jwt)
      this.setState({
        userIsLogged: true,
        userForm: CurrentUser.get(),
        userFeedbackMessage: {
          show: true,
          message: 'Usuário logado com sucesso',
          color: 'green'
        }
      })
    }).catch(message => {
      this.setState({
        userFeedbackMessage: {
          show: true,
          message,
          color: 'red'
        }
      })
    })
  }

  submitEdit(e){
    e.preventDefault()
    update(this.state.userForm).then(user => {
      this.setState({
        userFeedbackMessage: {
          show: true,
          message: 'Usuário editado com sucesso',
          color: 'green'
        }
      })
    }).catch(message => {
      this.setState({
        userFeedbackMessage: {
          show: true,
          message,
          color: 'red'
        }
      })
    })
  }

  deleteUser(e){
    e.preventDefault()
    destroy(CurrentUser.get().id).then(() => {
      CurrentUser.reset()
      this.setState({
        userIsLogged: false,
        userFeedbackMessage: {
          show: true,
          message: "Usuário deletado com sucesso",
          color: 'green'
        }
      })
    }).catch(() => {
      this.setState({
        userFeedbackMessage: {
          show: true,
          message: "Houve algum erro ao deletarmos o usuário",
          color: 'red'
        }
      })
    })
  }

  setLoginFormFieldValue(fieldKey, event){
    event.preventDefault()
    const form = { ...this.state.loginForm }
    this.setState({ loginForm: {...form, [fieldKey]: event.target.value }})
  }

  setUserFormFieldValue(fieldKey, event){
    event.preventDefault()
    const form = { ...this.state.userForm }
    this.setState({ userForm: {...form, [fieldKey]: event.target.value }})
  }

  render() {
    const { show, message, color } = this.state.userFeedbackMessage
    if(this.state.userIsLogged){
      const { name, email } = this.state.userForm
      return (
        <div>
          <div className="FormFeedbackMessage" style={{ color, display: show ? null : 'none' }}>
            {message}
          </div>
          <form className="Form" onSubmit={e => this.submitEdit(e)}>
            <div>
              <label>Seu nome:</label>
              <input type="text" value={name} onChange={e => this.setUserFormFieldValue('name', e)}/>
            </div>
            <div>
              <label>Seu email:</label>
              <input type="email" value={email} disabled={true}/>
            </div>
            <div>
              <label>Sua senha:</label>
              <input type="password" onChange={e => this.setUserFormFieldValue('password', e)}/>
            </div>
            <div className="FormSubmitionDiv">
              <button type="button" onClick={e => this.deleteUser(e)} style={{backgroundColor: "#C1254E"}}>
                Deletar usuário
              </button>
              <button type="submit">
                Salvar
              </button>
            </div>
          </form>

        </div>
      )
    }
    const { email, password } = this.state.loginForm
    return (
      <div>
        <div className="FormFeedbackMessage" style={{ color, display: show ? null : 'none' }}>
          {message}
        </div>
        <form className="Form" onClick={e => this.submitSignin(e)}>
          <div>
            <label>Seu email:</label>
            <input value={email} type="email" onChange={e => this.setLoginFormFieldValue('email', e)}/>
          </div>
          <div>
            <label>Sua senha:</label>
            <input value={password} type="password" onChange={e => this.setLoginFormFieldValue('password', e)}/>
          </div>
          <div className="FormSubmitionDiv">
            <button type="submit" >
              Entrar
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default SigninForm;
