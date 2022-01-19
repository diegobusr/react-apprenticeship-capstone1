import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home';
import VideoDetail from '../../pages/VideoDetail/VideoDetail.page';
import Header from '../Header';

function App() {
  const [searchText, setSearchText] = useState('');
  return (
    <BrowserRouter>
      <Header setSearchText={setSearchText} />
      <Switch>
        <Route exact path="/">
          <HomePage searchText={searchText} />
        </Route>
        <Route exact path="/watch/:videoId">
          <VideoDetail />
        </Route>
        <Route exact path="*">
          {/* <NoFoundPage /> */}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
