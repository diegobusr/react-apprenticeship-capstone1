import React, { useRef } from 'react';
import Header from '../../components/Header';
import Content from '../../components/Content/Content.component';

function VideoDetail() {
  const sectionRef = useRef(null);

  return (
    <section className="VideoDetail" ref={sectionRef}>
      <Header />
      <Content>
        <h1> details.. </h1>
      </Content>
    </section>
  );
}

export default VideoDetail;
