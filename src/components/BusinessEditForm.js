import React, { Component } from 'react';

class BusinessEdit extends Component {
  render() {
    return (
      <div>
        <form className="Form">
          <div>
            <label>Sua empresa:</label>
            <input type="text" />
          </div>
          <div>
            <label>Setor onde sua empresa atua:</label>
            <select>
              <option>Indústria</option>
              <option>Comércio</option>
              <option>Tecnologia</option>
            </select>
          </div>
          <div className="FormSubmitionDiv">
            <button type="submit">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default BusinessEdit;
