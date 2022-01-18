import React from 'react';
import ListPreviewVideo from '../../components/Content/ListPreviewVideo';
import Content from '../../components/Content/Content.component';

function HomePage({ searchText }) {
  return (
    <section>
      <Content>
        <ListPreviewVideo searchText={searchText} />
      </Content>
    </section>
  );
}

export default HomePage;
