import React from 'react';
import { useParams } from 'react-router';
import useFetch from '../../../utils/hooks/useFetch';
import { urlApiGetInfoVideo } from '../../../utils/youtube';
import { VideoView, EmbedVideo } from './VideoReproducer.styles';

const VideoReproducer = ({ videoIdParam }) => {
  const { videoId } = useParams();
  const defaultVideoId = videoIdParam || videoId;
  const { data } = useFetch(urlApiGetInfoVideo(defaultVideoId));
  //   const { data } = useFetch(
  //     `${process.env.PUBLIC_URL}/youtube-videos-mock.json`
  //   );
  if (!data) return null;
  const { title, description } = data[0].snippet;

  return (
    <VideoView>
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
