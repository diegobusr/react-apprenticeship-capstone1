const API_KEY = 'AIzaSyBFsw-yZeHxLplammpu-WHad0y2xnhz7kQ';

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&key=[ YOUR API KEY ]&q=cats

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&key=AIzaSyBFsw-yZeHxLplammpu-WHad0y2xnhz7kQ&q=cats

const urlApiGetVideos = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=cats&key=${API_KEY}`;

export { urlApiGetVideos };
