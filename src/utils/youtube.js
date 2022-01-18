// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&key=[ YOUR API KEY ]&q=cats

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&key=AIzaSyBFsw-yZeHxLplammpu-WHad0y2xnhz7kQ&q=cats

const urlApiGetVideos = (searchText) => {
  return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchText}&key=${process.env.REACT_APP_APIKEY}`;
};

export { urlApiGetVideos };
