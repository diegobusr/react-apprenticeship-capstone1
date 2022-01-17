import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  flex: 1;
  font-size: 22px;
  padding: 10px;
  background-color: #703b9c;
  color: white;
  border: none;
  outline: none;

  ::placeholder {
    color: #cccccc;
  }
`;

const SearchBar = () => {
  return <SearchInput type="text" placeholder="Wizeline"></SearchInput>;
};

export default SearchBar;
