import React from 'react';
import LeftSideContent from './LeftSideContent/LeftSideContent.component';
import ListRelatedVideos from './ListRelatedVideos/ListRelatedVideos.component';
import RightSideContent from './RightSideContent';
import { CustomDiv } from './VideoDetailContent.styles';
import VideoReproducer from './VideoReproducer/VideoReproducer.component';

const VideoDetailContent = ({ videoId }) => {
  return (
    <CustomDiv>
      <LeftSideContent>
        <VideoReproducer videoId={videoId} />
      </LeftSideContent>
      <RightSideContent>
        <ListRelatedVideos relatedToVideoId={videoId} />
      </RightSideContent>
    </CustomDiv>
  );
};

export default VideoDetailContent;
