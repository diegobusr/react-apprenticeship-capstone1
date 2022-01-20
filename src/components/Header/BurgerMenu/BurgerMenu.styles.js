import { Menu } from '@styled-icons/boxicons-regular/Menu';
import styled from 'styled-components';

export const MenuIcon = styled(Menu)`
  color: ${(prop) => (prop.darkThemeOn ? '#1E1E1E' : '#FFFFFF')};
  min-width: 38px;
  height: 38px;
`;
