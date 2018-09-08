import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from '../components/page';
import Progress from '../components/progress';
import Timeline from '../components/timeline';
import * as actions from '../redux/actions/resume';

class HH extends Component {
  state = {
    preview_text: '',
    skills: [],
    experience: [],
    education: [],
  }

  static fetchData({ store }) {
    return store.dispatch(actions.getResume())
  }

  componentDidMount() {
    this.props.getResume();
  }

  render() {
    return (
      this.props.isLoaded ?
      <div>
        <Page title={'Мое резюме'} description={this.props.resume.preview_text} content={
          <div>
            <p dangerouslySetInnerHTML={{ __html: this.props.resume.preview_text }}></p>
            <h2>
              Навыки
            </h2>
            <div>
              {this.props.resume.skills.map((item, key) => {
                  return <Progress key={key} title={item.name} value={item.level}/>
              })}
            </div>
            <h2>
              Опыт работы
            </h2>
            <div>
              <Timeline items={this.props.resume.experience}/>
            </div>
            <h2>
              Образование
            </h2>
            <div>
              <Timeline items={this.props.resume.education}/>
            </div>
          </div>
        }/>
      </div> : null
    )
  }
}

function mapStateToProps(state) {
  return {
    resume: state.resume,
    isLoaded: state.loader.isLoaded,
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(HH)
