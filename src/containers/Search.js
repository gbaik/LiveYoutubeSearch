import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';

const RenderField = (field) => {
  const { meta: { touched, error, warning }} = field; 

  return (
    <input type="text" {...field.input} />
  )
};

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

const SearchWithRouter = withRouter(Search);

export default reduxForm({
  form: 'Search'
})(SearchWithRouter);