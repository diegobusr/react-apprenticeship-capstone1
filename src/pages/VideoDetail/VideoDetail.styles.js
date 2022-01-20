import styled from 'styled-components';

export const DetailDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  background-color: ${(prop) => (prop.darkThemeOn ? '#121212' : '#FFFFFF')};
`;
