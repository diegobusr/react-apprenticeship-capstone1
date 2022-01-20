import React, { useContext } from 'react';
import { CardView } from './PreviewVideoCard.styles';
import { GlobalContext } from '../../../App/App.component';

const PreviewVideoCard = ({ infoVideo }) => {
  const { darkThemeOn } = useContext(GlobalContext).appContext;
  const { videoId } = infoVideo.id;
  const { thumbnails, title, description } = infoVideo.snippet;
  return (
    <CardView darkThemeOn={darkThemeOn} to={`watch/${videoId}`}>
      <img src={thumbnails.high.url} alt="thumbnail"></img>
      <h2> {title} </h2>
      <span> {description} </span>
    </CardView>
  );
};

export default PreviewVideoCard;
