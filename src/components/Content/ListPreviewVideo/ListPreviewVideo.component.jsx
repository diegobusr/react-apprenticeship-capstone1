import React from 'react';
import PreviewVideoCard from './PreviewVideoCard/PreviewVideoCard.component';
import { urlApiGetVideos } from '../../../utils/youtube';
import useFetch from '../../../utils/hooks/useFetch';
import { CustomDiv } from './ListPreviewVideo.styles';

const ListPreviewVideo = ({ searchText }) => {
  const { data: listVideos } = useFetch(urlApiGetVideos(searchText));
  //const { data: listVideos } = useFetch('./youtube-videos-mock.json');

  if (!listVideos) {
    return (
      <div className="loading">
        <img src={process.env.PUBLIC_URL + '/404.gif'} alt=""></img>
        <h2> Looking for videos... </h2>
      </div>
    );
  }

  return (
    <CustomDiv>
      {listVideos.map((item) => {
        return <PreviewVideoCard infoVideo={item} key={item.etag} />;
      })}
    </CustomDiv>
  );
};

export default ListPreviewVideo;
