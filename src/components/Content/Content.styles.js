import styled from 'styled-components';

export const CustomDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(prop) => (prop.darkThemeOn ? '#121212' : '#FFFFFF')};
`;
