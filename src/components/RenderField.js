import React from 'react';

const RenderField = (field) => {
  const { meta: { touched, error, warning }} = field; 

  return (
    <div>
      <input type='text' {...field.input} />
    </div>
  )
};

export default RenderField;