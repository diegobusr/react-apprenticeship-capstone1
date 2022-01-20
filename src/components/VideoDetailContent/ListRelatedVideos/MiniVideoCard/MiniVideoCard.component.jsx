import React, { useContext } from 'react';
import { GlobalContext } from '../../../App/App.component';
import { MiniCardView } from './MiniVideoCard.styles';

const MiniVideoCard = ({ infoVideo }) => {
  const { darkThemeOn } = useContext(GlobalContext).appContext;
  const { videoId } = infoVideo.id;
  if (!infoVideo.snippet) return null;
  const { thumbnails, title } = infoVideo.snippet;
  return (
    <MiniCardView darkThemeOn={darkThemeOn} to={`${videoId}`}>
      <img src={thumbnails.high.url} alt={`thumbnail-${videoId}`}></img>
      <h2> {title} </h2>
    </MiniCardView>
  );
};

export default MiniVideoCard;
