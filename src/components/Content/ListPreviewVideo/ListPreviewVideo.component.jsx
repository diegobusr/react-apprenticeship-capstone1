import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PreviewVideoCard from './PreviewVideoCard/PreviewVideoCard.component';

const CustomDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;
// const endpointEnv =
//   process.env.ENDPOINT === 'dev' ? './youtube-videos-mock.json' : 'xyz';

const ListPreviewVideo = () => {
  const [ListVideos, setListVideos] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetch('./youtube-videos-mock.json');
      const resultJson = await result.json();
      setListVideos(resultJson.items);
    })();
  }, []);

  return (
    <CustomDiv>
      {ListVideos
        ? ListVideos.slice(1).map((item) => {
            return (
              <PreviewVideoCard InfoVideo={item} key={item.etag}>
                {' '}
              </PreviewVideoCard>
            );
          })
        : 'No elements to be display..'}
    </CustomDiv>
  );
};

export default ListPreviewVideo;
