import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

/**
 * Пагинатор
 */
class Paginator extends Component {
  state = {
    page: 2,
  }
  render() {
    const { page } = this.props
    const next = parseInt(page, 10) + 1
    const prev = parseInt(page, 10) - 1
    return (
      this.props.itemsLength > 0 ?
        <div className={'b-pagination'}>
          { prev > 0 ? <NavLink className={'b-pagination__prev'} to={`/page/${prev}`}>{'<'} Пред.</NavLink> : null }
          { this.props.itemsLength > 9 ? <NavLink className={'b-pagination__next'} to={`/page/${next}`}>След. {'>'} </NavLink> : null }
        </div>
        : null
    )
  }
}

export default Paginator
