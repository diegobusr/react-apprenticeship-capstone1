import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PreviewVideoCard from './PreviewVideoCard/PreviewVideoCard.component';
import { urlApiGetVideos } from '../../../providers/youtube';

const CustomDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

  .loading {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 40px;

    img {
      height: 200px;
      width: 200px;
    }

    h2 {
      font-size: 1.1em;
    }
  }
`;
// const endpointEnv =
//   process.env.ENDPOINT === 'dev' ? './youtube-videos-mock.json' : 'xyz';

const ListPreviewVideo = () => {
  const [ListVideos, setListVideos] = useState([]);

  useEffect(() => {
    (async () => {
      //const result = await fetch(urlApiGetVideos);
      const result = await fetch('./youtube-videos-mock.json');
      const resultJson = await result.json();
      setListVideos(resultJson.items);
    })();
  }, []);

  return (
    <CustomDiv>
      {ListVideos.length !== 0 ? (
        ListVideos.map((item) => {
          return <PreviewVideoCard infoVideo={item} key={item.etag} />;
        })
      ) : (
        <div className="loading">
          <img src={process.env.PUBLIC_URL + '/404.gif'} alt=""></img>
          <h2> Looking for videos... </h2>
        </div>
      )}
    </CustomDiv>
  );
};

export default ListPreviewVideo;
