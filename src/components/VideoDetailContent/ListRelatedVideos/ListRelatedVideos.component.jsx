import React from 'react';
import MiniVideoCard from './MiniVideoCard/MiniVideoCard.component';
import useFetch from '../../../utils/hooks/useFetch';
import { ListDiv } from './ListRelatedVideos.styles';
import { useParams } from 'react-router';
import { urlApiGetRelatedVideos } from '../../../utils/youtube';

const ListRelatedVideos = ({ relatedToVideoId }) => {
  const { videoId } = useParams();
  const defaultVideoId = relatedToVideoId || videoId;
  const { data: listVideos } = useFetch(urlApiGetRelatedVideos(defaultVideoId));

  // const { data: listVideos } = useFetch(
  //   `${process.env.PUBLIC_URL}/youtube-videos-mock.json`
  // );

  if (!listVideos) {
    return (
      <div className="loading">
        <img src={process.env.PUBLIC_URL + '/404.gif'} alt=""></img>
        <h2> Looking for videos... </h2>
      </div>
    );
  }

  //const { title, description } = data.snippet;

  return (
    <ListDiv>
      {listVideos.map((item) => {
        return <MiniVideoCard infoVideo={item} key={item.etag} />;
      })}
    </ListDiv>
  );
};

export default ListRelatedVideos;
