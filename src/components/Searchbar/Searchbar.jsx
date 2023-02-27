import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

import searchIcon from '../../resources/search_icon.svg';

function Searchbar({ onSubmitProp }) {
  const [input, setInput] = useState('');

  const handleStateChange = e => {
    setInput(e.currentTarget.value.toLowerCase());
    // console.log(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(input);

    if (input.trim() === '') {
      return toast.warn('Please enter a valid input');
    }

    onSubmitProp(input);
    setInput('');
  };

  return (
    <SearchbarContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton
          type="submit"
          style={{ backgroundImage: `url(${searchIcon})` }}
        >
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          value={input}
          placeholder="Search images and photos"
          onChange={handleStateChange}
        />
      </SearchForm>
    </SearchbarContainer>
  );
}

Searchbar.propTypes = {
  onSubmitProp: PropTypes.func.isRequired,
};

export default Searchbar;
