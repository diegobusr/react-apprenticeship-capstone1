import styled from 'styled-components';

export const RightSideDiv = styled.div`
  display: flex;
  width: 800px;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 30px;
  background-color: ${(prop) => (prop.darkThemeOn ? '#121212' : '#FFFFFF')};
`;
