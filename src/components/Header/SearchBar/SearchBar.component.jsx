import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { types } from '../../../utils/reducer';
import { GlobalContext } from '../../App/App.component';
import { SearchInput } from './SearchBar.styles';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const { setAppContext } = useContext(GlobalContext);

  const history = useHistory();

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setAppContext({ type: types.SET_SEARCH_TEXT, payload: e.target.value });
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
