import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import VideoDetail from '../../pages/VideoDetailView/VideoDetail.page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/search">
          <VideoDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
