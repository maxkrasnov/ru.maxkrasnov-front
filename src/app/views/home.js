import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PostList from '../components/postList';
import * as actions from '../redux/actions/posts'

class Home extends Component {
  static fetchData({ store, params }) {
    return store.dispatch(actions.getPosts(params.page))
  }

  nextPage = () => {
    let { page } = this.props;
    page = page + 1
    this.props.getPosts(page);
  }

  componentDidMount() {
    this.props.getPosts(this.props.match.params.page);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Максим Краснов - Full-stack веб-разработчик PHP/JS/Golang</title>
          <meta name="description" content={'Привет! Меня зовут Максим. Увлекаюсь веб-разработкой, \n' +
          'пишу на языках PHP, JS, GO, могу писать как фронт так и бекэнд. ' +
          'Проф скилы: Laravel, Bitrix, Битрикс, ReactJS, ReactNative, Angular, NodeJS'} />
          <meta name="keywords" content={'Laravel, Bitrix, ReactJS, ReactNative, PHP, Веб-разработка, Максим, Краснов'}/>
        </Helmet>
        <PostList page={this.props.page} data={this.props.posts} isLoaded={this.props.isLoaded}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state.posts,
    isLoaded: state.loader.isLoaded,
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Home);
