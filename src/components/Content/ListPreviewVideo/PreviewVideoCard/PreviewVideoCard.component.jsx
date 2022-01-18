import React from 'react';
import { CardView } from './PreviewVideoCard.styles';

const PreviewVideoCard = ({ infoVideo }) => {
  const { videoId } = infoVideo.id;
  const { thumbnails, title, description } = infoVideo.snippet;
  return (
    <CardView to={`watch/${videoId}`}>
      <img src={thumbnails.high.url} alt="thumbnail"></img>
      <h2> {title} </h2>
      <span> {description} </span>
    </CardView>
  );
};

export default PreviewVideoCard;
