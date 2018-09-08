import React from 'react';
import ReactDOM from 'react-dom/server';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { StaticRouter as Router, matchPath } from 'react-router';
import axios from './app/utils/axios'

import express from 'express';

import helmet from 'react-helmet';
import App from './app';

import reducers from './app/redux/reducers';
import thunk from './app/redux/middleware/thunk';
import routesList from './app/routes';
import defaultPage from './app/utils/defaultPage';

const sm = require('sitemap')
const webpack = require('webpack');
const app = express();
let port = 9000;

let sitemap = sm.createSitemap ({
  hostname: 'https://maxkrasnov.ru',
  cacheTime: 600000,
  urls: [
    { url: '/', priority: 1 },
    { url: '/hh/', priority: 1 },
    { url: '/works/', priority: 1 },
    { url: '/feedback/', priority: 1 },
  ]
});

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  (function () {
    port = 9001
    let webpackConfig = require('../webpack.config.development');
    let compiler = webpack(webpackConfig);

    app.use(require("webpack-dev-middleware")(compiler, {
      hot: true,
      logLevel: 'warn',
      publicPath: webpackConfig.output.publicPath
    }));

    app.use(require("webpack-hot-middleware")(compiler, {
      log: console.log,
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000
    }));
  })()
}

app.use('/', express.static('./dist/public'));
// генерируем sitemap.xml
app.get('/sitemap.xml', function(req, res) {
  axios
    .get('/notes?all=Y')
    .then((resp) => {
        let list = resp.data
        list.map((item) => {
          sitemap.add({url: `/note/${item.code}/`, priority: 0.9});
        })
        sitemap.toXML( function (err, xml) {
          if (err) {
            return res.status(500).end();
          }
          res.header('Content-Type', 'application/xml');
          res.send( xml );
        });
    })
})

// генерируем robots.txt
app.get('/robots.txt', function (req, res) {
  res.header('Content-Type', 'text/plain');
  res.send("User-agent: *\nSitemap: https://maxkrasnov.ru/sitemap.xml")
})

app.get('*', async (req, res) => {
    try {
        // создание хранилища для хранения состояний redux
        const store = createStore(reducers, {}, applyMiddleware(thunk))
        let routePath = null
        let { path, component } = routesList.routes.find(({ path, exact }) => {
            routePath = matchPath(req.url, {
                path,
                exact,
                strict: false
            })
            return routePath
        }) || {}

        // проверка на наличие компонента по данному урлу
        if (!component) {
            component = {}
        }

        // проверка на наличие функции fetchData
        if (!component.fetchData) {
          component.fetchData = () => new Promise(resolve => resolve());
        }

        await component.fetchData({ store, params: (routePath ? routePath.params : {}) });
        let preloadState = store.getState();

        let context = {};

        const html = ReactDOM.renderToString(
          <Provider store={store}>
            <Router context={context} location={req.url}>
              <App/>
            </Router>
          </Provider>
        )
        // для генерации мета-данных
        const helmetData = helmet.renderStatic();
        if (context.url) {
          res.redirect(context.status, 'http://' + req.headers.host + context.url);
        } else if(routePath === null || routePath.path == '/404') {
          // выдача 404 страницы
          res.status(404).send(defaultPage(html, preloadState, helmetData))
        } else {
          res.send(defaultPage(html, preloadState, helmetData))
        }

    } catch (e) {
        res.status(400).send(defaultPage('An error occured.', {}, {}))
    }
})

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.listen(port, function () {
    console.log('App running on localhost:' + port);
})
