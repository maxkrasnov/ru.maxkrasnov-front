import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Page from '../components/page';
import PostList from '../components/postList';
import * as actions from '../redux/actions/works';

class Works extends Component {
  static fetchData({ store, params }) {
    return store.dispatch(actions.getWorks(params.page))
  }

  componentDidMount() {
    this.props.getWorks(this.props.match.params.page);
  }

  nextPage = () => {
    let { page } = this.props;
    page = page + 1
    this.props.getPosts(page);
  }

  render() {
    return (
      <div>
        <Page canonical={'https://maxkrasnov.ru/works/'} description={'В данном разделе указаны работы, в которых я принимал участие или реализовывал полностью сам.'} title={'Мои работы'} content={<div>

          В данном разделе указаны работы, в которых я принимал участие или реализовывал полностью сам.
        </div>}/>
        { this.props.isLoaded ? <PostList location={this.props.match} page={this.props.page} data={this.props.works} compact={true}/> : null }
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    ...state.works,
    isLoaded: state.loader.isLoaded,
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Works);
