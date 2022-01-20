import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MiniCardView = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
  color: black;
  background-color: ${(prop) => (prop.darkThemeOn ? '#1E1E1E' : '#FFFFFF')};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
  flex-direction: column;
  padding: 5px 5px 5px 5px;

  :hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  img {
    height: 120px;
    width: 240px;
    border-radius: 5px 5px 0 0;
    object-fit: cover;
  }

  h2 {
    color: ${(prop) => (prop.darkThemeOn ? '#FFFFFF' : '#202124')};
    text-align: left;
    margin-left: 5px;
    max-width: 50%;
    overflow: hidden;
    justify-content: center;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 0.75em;
  }
`;
