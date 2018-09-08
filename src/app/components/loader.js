import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../redux/actions/loader'

class Loader extends Component {
  render() {
    return (
      <div className={`b-loader b-loader_${this.props.loader}`}>
        <div className={'b-loader__status'}></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state.loader,
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Loader);
