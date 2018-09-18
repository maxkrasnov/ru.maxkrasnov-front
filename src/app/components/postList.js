import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Post from './post';
import Paginator from './paginator';

/**
 * Компонент для вывода списка постов/работ
 */
export default class PostList extends Component {
  render() {
    return (
      <div className={'posts-list'}>
        {this.props.data.map((item, i) => {
          return (
            <Post data={item} key={i} compact={this.props.compact}/>
          )
        })}
        <Paginator location={this.props.location} page={this.props.page} itemsLength={this.props.data.length}/>
      </div>
    )
  }
}

PostList.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired, // массив постов/работ
  compact: PropTypes.bool, // вид поста: компактный или фулл
}
