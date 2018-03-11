import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormSelector from './components/FormSelector'
import { ACTIONS } from './helpers/action-options'
import { MODELS } from './helpers/model-options'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      action: ACTIONS.SIGNUP,
      model: MODELS.USER
    }
  }

  setModel(newModel){
    this.setState({ model: newModel })
  }

  setAction(newAction){
    this.setState({ action: newAction })
  }

  getText(){
    const  { model, action } = this.state
    if(action === ACTIONS.SIGNUP){
      if(model === MODELS.BUSINESS){
        return 'Cadastre sua empresa na RN! (Módulo ainda não implementado!)'
      }
      return 'Cadastre seu usuário e faça parte da RN!'
    }

    if(model === MODELS.USER){
      return 'Edite seu cadastro na RN!'
    }

    return 'Edite sua empresa cadastrada na RN! (Módulo ainda não implementado)'
  }

  render() {

    return (
      <div className="container">
        <div className="Card">
          <header>
            Cadastro
          </header>
          <div>
            <div className="ActionSelector">
              <div className={this.state.action === ACTIONS.SIGNUP ? 'active' : ''} onClick={() => this.setAction(ACTIONS.SIGNUP)}>
                Novo cadastro
              </div>
              <div className={this.state.action === ACTIONS.EDIT ? 'active' : ''} onClick={() => this.setAction(ACTIONS.EDIT)}>
                Editar cadastro
              </div>
            </div>
            <div className="ModelSelector">
              <div className={this.state.model === MODELS.USER ? 'active' : ''} onClick={() => this.setModel(MODELS.USER)}>
                Seu cadastro
              </div>
              <div className={this.state.model === MODELS.BUSINESS ? 'active' : ''} onClick={() => this.setModel(MODELS.BUSINESS)}>
                Cadastro empresa
              </div>
            </div>
            <div className="CallToActionText">
              {this.getText()}
            </div>
            <hr />
            <FormSelector action={this.state.action} model={this.state.model} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
