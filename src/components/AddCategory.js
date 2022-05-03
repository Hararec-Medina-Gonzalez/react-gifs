import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

  // Hooks
  const [inputValue, setInputValue] = useState('');

  // Handlers
  const handleInputChange = (e) => setInputValue(e.target.value),
    handleSubmit = (e) => {
      e.preventDefault(e);
      // validamos si al quitar espacios vacios inputValue es el string '' 
      if (inputValue.trim().length) {
        setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
      }
    };

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <input
          type={'text'}
          value={ inputValue }
          onChange={ handleInputChange } 
          />
      </form>
    </>
  )
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;