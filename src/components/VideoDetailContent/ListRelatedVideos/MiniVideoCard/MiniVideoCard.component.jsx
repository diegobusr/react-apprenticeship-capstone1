import React from 'react';
import { MiniCardView } from './MiniVideoCard.styles';

const MiniVideoCard = ({ infoVideo }) => {
  const { videoId } = infoVideo.id;
  if (!infoVideo.snippet) return null;
  const { thumbnails, title } = infoVideo.snippet;
  return (
    <MiniCardView to={`${videoId}`}>
      <img src={thumbnails.high.url} alt={`thumbnail-${videoId}`}></img>
      <h2> {title} </h2>
    </MiniCardView>
  );
};

export default MiniVideoCard;
