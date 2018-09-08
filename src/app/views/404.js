import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class Page404 extends Component {
  render() {
    return (
      <div className={'p404'}>
        <Helmet>
          <title>Максим Краснов - Страница не найдена</title>
        </Helmet>
        <div className={'p404__content'}>
          <div className={'p404__404'}>404</div>
        </div>
      </div>
    )
  }
}
