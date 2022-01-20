import React, { useContext } from 'react';
import { useParams } from 'react-router';
import useFetch from '../../../utils/hooks/useFetch';
import { urlApiGetInfoVideo } from '../../../utils/youtube';
import { GlobalContext } from '../../App/App.component';
import { VideoView, EmbedVideo } from './VideoReproducer.styles';

const VideoReproducer = ({ videoIdParam }) => {
  const { videoId } = useParams();
  const { darkThemeOn } = useContext(GlobalContext).appContext;
  const defaultVideoId = videoIdParam || videoId;
  const { data } = useFetch(urlApiGetInfoVideo(defaultVideoId));
  // const { data } = useFetch(
  //   `${process.env.PUBLIC_URL}/youtube-videos-mock.json`
  // );
  if (!data) return null;
  const { title, description } = data[0].snippet;

  return (
    <VideoView darkThemeOn={darkThemeOn}>
      <EmbedVideo
        title="Youtube embed"
        src={`https://www.youtube.com/embed/${defaultVideoId}`}
        allowFullScreen
      />
      <h2> {title} </h2>
      <span> {description} </span>
    </VideoView>
  );
};

export default VideoReproducer;
