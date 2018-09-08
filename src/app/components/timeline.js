import React, { Component } from 'react'
import PropTypes from 'prop-types';

const TimelineItem = ({ data }) => {
  return (
    <div className={'timeline__item'}>
      <div className={'timeline__item-info'}>
        <div className={'timeline__item-label'}>
          {data.years}
        </div>
        <div className={'timeline__item-title'}>
          {data.organization}
        </div>
        <div className={'timeline__item-subtitle'}>
          {data.position}
        </div>
        <div className={'timeline__item-subsubtitle'}>
          {data.location}
        </div>
      </div>
      <div className={'timeline__item-description'}>
        {data.description}
      </div>
    </div>
  )
}

/**
 * Компонент таймлайн для отображения опыта работы и обучения
 */
class Timeline extends Component {
  render() {
    return (
      <div className={'timeline'}>
        {this.props.items.map((item, i) => {
          return <TimelineItem key={i} data={item}/>
        })}
      </div>
    )
  }
}

Timeline.propTypes = {
  items: PropTypes.array,
}

export default Timeline
