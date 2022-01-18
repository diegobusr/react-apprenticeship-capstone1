import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardView = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
  color: black;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 20%;
  margin: 15px;
  flex-direction: column;
  padding: 5px 10px 5px 10px;

  :hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  img {
    height: 145px;
    width: 100%;
    border-radius: 5px 5px 0 0;
    object-fit: cover;
  }

  h2 {
    min-height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 0.9em;
  }

  span {
    text-overflow: ellipsis;
    white-space: normal;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    max-width: 90%;
    margin-bottom: 10px;
    font-size: 0.8em;
    color: #757575;
  }
`;
