import styled from 'styled-components';

export const VideoView = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: black;
  background-color: white;
  width: 100%;
  flex-direction: column;
  padding: 5px 5px 5px 15px;

  h2 {
    min-height: 50px;
    font-size: 0.9em;
  }

  span {
    max-width: 90%;
    margin-bottom: 10px;
    font-size: 0.8em;
    color: #757575;
  }
`;

export const EmbedVideo = styled.iframe`
  width: 100%;
  height: 600px;
`;
