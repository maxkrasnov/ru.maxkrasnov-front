import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import formattedDate from '../utils/date';
import { getWords, stripTags } from '../utils/seo';

/**
 * Компонент для генерации страницы
 */
class Page extends Component {
  render() {
    return (
      <article className={'post-detail'}>
        <Helmet>
          <title>Максим Краснов - {stripTags(this.props.title)}</title>
          <meta name="description" content={this.props.description} />
          <meta name="keywords" content={getWords(this.props.description)} />
        </Helmet>
        <div className={'post-detail__header'}>
          <h1 className={'post-detail__title'}>
            <span dangerouslySetInnerHTML={{ __html: this.props.title }}></span>
          </h1>
          <div className={'post-detail__details'}>
            {this.props.category ? <div className={'post__header-details-category'}>
                <a dangerouslySetInnerHTML={{ __html: this.props.category }}></a>
              </div> : null
            }
            {this.props.date ? <a className={'post__header-details-date icon-calendar-outlilne'}>
              <span>
                { formattedDate(this.props.date) }
              </span>
            </a> : null }
          </div>
        </div>
        {this.props.media ? <div dangerouslySetInnerHTML={{ __html: this.props.media }} className={'post-detail__media'}></div> : null }
        {this.props.html ? <div dangerouslySetInnerHTML={{ __html: this.props.content }} className={'post-detail__content'}></div> : <div className={'post-detail__content'}>{this.props.content}</div>}
      </article>
    )
  }
}

Page.propTypes = {
  title: PropTypes.string, // заголовок страницы
  category: PropTypes.any, // категория страницы
  media: PropTypes.any, // медиа контент
  date: PropTypes.any, // дата
  content: PropTypes.any, // контент страницы
  html: PropTypes.bool,
  description: PropTypes.string.isRequired,
}

export default Page;
