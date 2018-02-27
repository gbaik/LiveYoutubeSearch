import { Field, reduxForm } from 'redux-form';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import RenderField from '../components/RenderField.js';

class Search extends Component { 
  constructor(props) { 
    super(props);
  }

  render() {
    const { handleSubmit } = this.props;
    
    return (
      <div className = 'search'>
        <div className = 'field'>
          <form onSubmit={ handleSubmit }>
            <img src = './images/search.svg' id = 'search_image'></img>
            <Field name='videoSearchText' component={ RenderField } /> 
          </form>
        </div>
      </div>
    );
  };
}

export default reduxForm({
  form: 'Search'
})(Search);