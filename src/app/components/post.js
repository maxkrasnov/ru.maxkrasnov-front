import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom'

import formattedDate from '../utils/date'

const fullSizePost = (post) => {
  return (
    <article className={'post'}>
      <div className={'post__header'}>
        <h2 className={'post__header-title'}>
          <NavLink to={`/note/${post.code}`} dangerouslySetInnerHTML={{ __html: post.title }}></NavLink>
        </h2>
        <div className={'post__header-details'}>
          {post.category ? <div className={'post__header-details-category'}>
              <a>{post.category}</a>
            </div> : null }
          <a className={'post__header-details-date icon-calendar-outlilne'}>
              <span>
                {formattedDate(post.CreatedAt)}
              </span>
          </a>
        </div>
      </div>
      <div className={'post__media'} dangerouslySetInnerHTML={{ __html: post.media }}></div>
      <div className={'post__description'}>
        <p dangerouslySetInnerHTML={{ __html: post.preview_text }}></p>
      </div>
      <div className={'post__more'}>
        <NavLink to={`/note/${post.code}`}>Продолжить чтение ...</NavLink>
      </div>
    </article>
  )
}

const compactSizePost = (post) => {
  return (
    <article className={'post post_compact'}>
      <div className={'post__media'} dangerouslySetInnerHTML={{ __html: post.media }}></div>
      <div className={'post__content'}>
        <div className={'post__header'}>
          <h2 className={'post__header-title'}>
            <a dangerouslySetInnerHTML={{ __html: post.title }}></a>
          </h2>
          <div className={'post__header-details'}>
            {post.category ? <div className={'post__header-details-category'}>
              <a>{post.category}</a>
            </div> : null }
            <a className={'post__header-details-date icon-calendar-outlilne'}>
              <span>
                {formattedDate(post.CreatedAt)}
              </span>
            </a>
          </div>
        </div>
        <div className={'post__description'}>
          <p dangerouslySetInnerHTML={{ __html: typeof post.description !== 'undefined' ? post.description : post.preview_text }}></p>
        </div>
      </div>
    </article>
  )
}

/**
 * Рендеринг одного поста в списке
 */
class Post extends Component {
  render = () => {
    return (
      this.props.compact ? compactSizePost(this.props.data) : fullSizePost(this.props.data)
    )
  }
}

Post.propTypes = {
  compact: PropTypes.bool, // компактный или полноразмерный пост
  data: PropTypes.object, // объект с данными о посте
}


export default Post;
