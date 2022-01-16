import React, { useRef } from 'react';

import Header from '../../components/Header';
import ListPreviewVideo from '../../components/Content/ListPreviewVideo';
import Content from '../../components/Content/Content.component';

function HomePage() {
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <Header />
      <Content>
        <ListPreviewVideo></ListPreviewVideo>
      </Content>
    </section>
  );
}

export default HomePage;
