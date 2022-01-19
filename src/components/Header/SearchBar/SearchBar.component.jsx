import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { SearchInput } from './SearchBar.styles';

const SearchBar = ({ setSearchText }) => {
  const [inputValue, setInputValue] = useState('');

  const history = useHistory();

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setSearchText(e.target.value);
      history.push('/');
    }
  };

  return (
    <SearchInput
      value={inputValue}
      type="text"
      placeholder="Wizeline"
      onChange={(e) => onChangeInput(e)}
      onKeyPress={(e) => handleKeyPress(e)}
    />
  );
};

export default SearchBar;
