import React from 'react';
import { useParams } from 'react-router';
import VideoDetailContent from '../../components/VideoDetailContent/VideoDetailContent.component';

function VideoDetail() {
  const { videoId } = useParams();
  return (
    <section>
      <VideoDetailContent videoId={videoId} />
    </section>
  );
}

export default VideoDetail;
