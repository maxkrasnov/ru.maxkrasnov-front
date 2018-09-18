import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

/**
 * Пагинатор
 */
class Paginator extends Component {
  state = {
    page: 2,
  }

  getPath = (location) => {
    let { path } = location
    path = path.replace('/page/:page', '')
    return path
  }

  render() {
    const { page, location } = this.props
    const next = parseInt(page, 10) + 1
    const prev = parseInt(page, 10) - 1

    return (
      this.props.itemsLength > 0 ?
        <div className={'b-pagination'}>
          { prev > 0 ? <NavLink className={'b-pagination__prev'} to={`${this.getPath(location)}/page/${prev}`}>{'<'} Пред.</NavLink> : null }
          { this.props.itemsLength > 9 ? <NavLink className={'b-pagination__next'} to={`${this.getPath(location)}/page/${next}`}>След. {'>'} </NavLink> : null }
        </div>
        : null
    )
  }
}

export default Paginator
