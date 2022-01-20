import styled from 'styled-components';

export const LeftSideDiv = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  background-color: ${(prop) => (prop.darkThemeOn ? '#121212' : '#FFFFFF')};
`;
