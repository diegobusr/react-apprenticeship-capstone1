import styled from 'styled-components';
import { PersonCircle } from '@styled-icons/bootstrap/PersonCircle';

export const CustomButton = styled(PersonCircle)`
  color: ${(prop) => (prop.darkThemeOn ? '#1E1E1E' : '#FFFFFF')};
  width: 50px;
  height: 50px;
`;
