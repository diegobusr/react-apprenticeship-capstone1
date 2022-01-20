import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { GlobalContext } from '../../components/App/App.component';
import LeftSideContent from '../../components/VideoDetailContent/LeftSideContent/LeftSideContent.component';
import ListRelatedVideos from '../../components/VideoDetailContent/ListRelatedVideos/ListRelatedVideos.component';
import RightSideContent from '../../components/VideoDetailContent/RightSideContent';
import VideoReproducer from '../../components/VideoDetailContent/VideoReproducer/VideoReproducer.component';
import { DetailDiv } from './VideoDetail.styles';

function VideoDetail() {
  const { darkThemeOn } = useContext(GlobalContext).appContext;
  const { videoId } = useParams();
  return (
    <section>
      <DetailDiv darkThemeOn={darkThemeOn} videoId={videoId}>
        <LeftSideContent>
          <VideoReproducer videoId={videoId} />
        </LeftSideContent>
        <RightSideContent>
          <ListRelatedVideos relatedToVideoId={videoId} />
        </RightSideContent>
      </DetailDiv>
    </section>
  );
}

export default VideoDetail;
