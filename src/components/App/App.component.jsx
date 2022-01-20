import React, { useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home';
import VideoDetail from '../../pages/VideoDetail/VideoDetail.page';
import Header from '../Header';
import { reducer } from '../../utils/reducer';
import { GlobalStyle } from '../../global.styles';

export const GlobalContext = React.createContext();

function App() {
  const [appContext, setAppContext] = useReducer(reducer, {
    searchText: '',
    darkThemeOn: true,
  });

  return (
    <GlobalContext.Provider value={{ appContext, setAppContext }}>
      <GlobalStyle darkThemeOn={appContext.darkThemeOn} />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/watch/:videoId">
            <VideoDetail />
          </Route>
          <Route exact path="*">
            {/* <NoFoundPage /> */}
          </Route>
        </Switch>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
