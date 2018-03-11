import React, { Component } from 'react';
import { ACTIONS } from '../helpers/action-options'
import { MODELS } from '../helpers/model-options'
import UserSignupForm from './UserSignupForm'
import UserEditForm from './UserEditForm'
import BusinessSignupForm from './BusinessSignupForm'
import BusinessEditForm from './BusinessEditForm'

import PropTypes from 'prop-types'

class FormSelector extends Component {
  render() {
    if(this.props.model === MODELS.USER){
      if(this.props.action === ACTIONS.SIGNUP) return <UserSignupForm />
      return <UserEditForm />
    }
    if(this.props.action === ACTIONS.SIGNUP) return <BusinessSignupForm />
    return <BusinessEditForm />
  }
}

FormSelector.propTypes = {
  action: PropTypes.oneOf(Object.values(ACTIONS)) ,
  model: PropTypes.oneOf(Object.values(MODELS)),
}

export default FormSelector;
