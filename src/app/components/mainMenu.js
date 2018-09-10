import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MainMenu extends Component {
  onMobileBtnClick = () => {
    document.getElementsByClassName('app')[0]
      .classList
      .toggle('app_open-menu')
  }

  render() {
    return (
      <div className={'menu'}>
        <div className={'menu__mobile-btn'} onClick={() => { this.onMobileBtnClick() }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={'menu__content'}>
          <div className={'menu__logo'}>
            <a href={'/'} className={'menu__logo-name'}>
              <div>
                Максим
              </div>
              <div>
                Краснов
              </div>
            </a>
            <div className={'menu__logo-description'}>Full-stack разработчик</div>
          </div>
          <ul className={'menu__list'}>
            <li><NavLink exact={true} activeClassName={'active'} to={'/'}>Блог</NavLink></li>
            <li><NavLink activeClassName={'active'} to={'/hh'}>Резюме</NavLink></li>
            <li><NavLink activeClassName={'active'} to={'/works'}>Мои работы</NavLink></li>
            <li><NavLink activeClassName={'active'} to={'/feedback'}>Написать мне</NavLink></li>
          </ul>
          <ul className={'menu__social'}>
            <li><a href={'https://vk.com/maakcum'} target={'_blank'} className={'icon-vk'}> </a></li>
            <li><a href={'https://www.facebook.com/imaxkrasnov'} target={'_blank'} className={'icon-facebook'}> </a></li>
            <li><a href={'https://twitter.com/imaxkrasnov'} target={'_blank'} className={'icon-twitter'}> </a></li>
            <li><a href={'https://github.com/maxkrasnov/'} target={'_blank'} className={'icon-github'}> </a></li>
            <li><a href={'https://ru.stackoverflow.com/users/243667/maxkrasnov'} target={'_blank'} className={'icon-stackoverflow'}> </a></li>
          </ul>
          <div className={'menu__footer'}>
            <a target={'_blank'} href={'https://github.com/maxkrasnov/ru.maxkrasnov-front'}>исходники сайта</a><br/>
            &copy; {new Date().getFullYear()}
          </div>
        </div>
      </div>
    )
  }
}
