import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент для отображения шкалы скиллов/опыта
 */
class Progress extends Component {
  render() {
    return (
      <div className={'progress'}>
        <div className={'progress__title'}>{this.props.title}</div>
        <div className={'progress__level'}>
          <div className={'progress__level-line'} style={{ width: `${this.props.value}%` }}></div>
        </div>
      </div>
    )
  }
}

Progress.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
}

export default Progress;
