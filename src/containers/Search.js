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
      <div>
        <form onSubmit={ handleSubmit }>
          <Field name='videoSearchText' component={ RenderField } />  
          <button type='submit'>Search</button>
        </form>
      </div>
    );
  };
}

export default reduxForm({
  form: 'Search'
})(Search);