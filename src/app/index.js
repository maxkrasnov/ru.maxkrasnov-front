import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Redirect from './components/redirectRoute';
import routesList from './routes/index';
import MainMenu from './components/mainMenu';
import Page404 from './views/404';
import Loader from './components/loader';
/**
 * Общий каркас приложения
 */
export default class Index extends Component {
  render() {
    return (
      <div className={'app'}>
        <Loader/>
        <div className={'app__container'}>
          <div className={'app__menu'}>
            <MainMenu/>
          </div>
          <div className={'app__content'}>
            <Switch>
              {routesList.routes.map(({ path, component, exact }, i) =>
                <Route key={Math.random() + 'ROUTE_'} exact={exact} path={path} component={component} />
              )}
              {routesList.redirects.map(({ from, to, status }, i) =>
                <Redirect key={Math.random() + 'REDIRECT_'} from={from} to={to} status={status} />
              )}
              <Route component={Page404}/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
