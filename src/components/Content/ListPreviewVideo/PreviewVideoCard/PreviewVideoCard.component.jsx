import React from 'react';
import styled from 'styled-components';

const CardView = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 20%;
  height: 400%;
  margin: 15px;
  flex-direction: column;

  :hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  img {
    flex: 1 0 0;
    height: 145px;
    width: 100%;
    border-radius: 5px 5px 0 0;
    object-fit: cover;
  }

  h2 {
    display: block;
    font-size: 0.9em;
    padding: 10px;
  }

  span {
    flex: 1;
    display: block;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 0.8em;
    color: #757575;
  }
`;

const PreviewVideoCard = ({ infoVideo }) => {
  return (
    <CardView>
      <img src={infoVideo.snippet.thumbnails.high.url} alt="thumbnail"></img>
      <h2> {infoVideo.snippet.title} </h2>
      <span> {infoVideo.snippet.description} </span>
    </CardView>
  );
};

export default PreviewVideoCard;
