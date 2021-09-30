import React from 'react';
import {useSelector} from 'react-redux';
import {Switch, Route, HashRouter as BrowserRouter} from 'react-router-dom';

import {AppRoute} from '../../const';
import Main from '../main/main';
import Error from '../not-found/not-found';
import LoadingScreen from '../loading-screen/loading-screen';
import {getIsDataLoaded} from '../../store/contacts/selectors';

function App() {
  const isDataLoaded = useSelector(getIsDataLoaded);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main className="page page--gray page--index" />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
