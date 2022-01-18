import React from 'react';
import Content from '../../components/Content/Content.component';
import { useParams } from 'react-router';

function VideoDetail() {
  const { videoId } = useParams();
  console.log(`videoId`, videoId);

  return (
    <section>
      <Content>
        <h1> details.. </h1>
      </Content>
    </section>
  );
}

export default VideoDetail;
