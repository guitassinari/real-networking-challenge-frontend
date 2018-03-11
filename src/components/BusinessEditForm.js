import React, { Component } from 'react';
import { ACTIONS } from '../helpers/action-options'
import { MODELS } from '../helpers/model-options'

import PropTypes from 'prop-types'

class FormSelector extends Component {
  render() {
    return (
      <div>
        <div className="Form">
          <div>
            <label>Seu nome:</label>
            <input type="text" />
          </div>
          <div>
            <label>Sua senha:</label>
            <input type="password" />
          </div>
        </div>
        <div className="FormSubmitionDiv">
          <button>
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
