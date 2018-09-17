import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Page from '../components/page';

import * as actions from '../redux/actions/posts'

class Note extends Component {
  static fetchData({ store, params }) {
    return store.dispatch(actions.getPost(params.code))
  }

  componentDidMount() {
    this.props.getPost(this.props.match.params.code);
  }

  render() {
    return (
      typeof this.props.post.title !== 'undefined' ? <Page media={this.props.post.media} description={this.props.post.preview_text} content={this.props.post.detail_text} category={this.props.post.category} date={this.props.post.CreatedAt} title={this.props.post.title}/> : null
    )
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.post,
    getPost: state.posts.getPost,
    isLoaded: state.loader.isLoaded,
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Note);
