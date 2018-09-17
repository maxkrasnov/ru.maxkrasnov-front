import React, { Component } from 'react';
import axios from '../utils/axios';

import Page from '../components/page';

export default class Feedback extends Component {
  state = {
    name: '',
    email: '',
    question: '',
    success: false,
  }

  sendFeedback = (e) => {
    e.preventDefault()
    const { name, email, question } = this.state;

    if (name === '' || email === '' || question === '') {
      return
    }

    axios.post('/feedback', {
      name, email, question,
    }).then(() => {
      this.setState({ success: true }, () => {
        this.setState({
          name: '',
          email: '',
          question: '',
        })
      })
    }).catch(() => {
      this.setState({ success: false })
    })
  }

  componentDidMount() {
    // говнокод, но так быстрее и проще, не хотел париться
    document.getElementsByClassName('app')[0]
      .classList
      .remove('app_open-menu')
  }

  render() {
    return (
      <div>
        <Page title={'Написать мне'}
              description={'Если у вас появились вопросы или вам нужен хорошо сделанный сайт/мобильное приложение, можете ниже по форме связаться со мной.'}
              content={`Если у вас появились вопросы или вам нужен хорошо сделанный сайт/мобильное приложение,
              можете ниже по форме связаться со мной. Все поля обязательны.`}/>
        { this.state.success ? <blockquote>
            Ваш вопрос отправлен мне, постараюсь как можно быстрее ответить на него. Спасибо.
          </blockquote> : null }
        <form ref={(form) => { this.form = form }} className={'form'} id={'feedback-form'}>
          <div className={'form__field'}>
            <input type={'text'} onChange={ (e) => { this.setState({ name: e.target.value }) }} value={this.state.name} placeholder={'Ваше имя'}/>
          </div>
          <div className={'form__field'}>
            <input type={'text'} onChange={ (e) => { this.setState({ email: e.target.value }) }} value={this.state.email} placeholder={'Ваш email'}/>
          </div>
          <div className={'form__field'}>
            <textarea onChange={ (e) => { this.setState({ question: e.target.value }) }} value={this.state.question} placeholder={'Ваш вопрос'}/>
          </div>
          <div className={'form__field form__field_submit'}>
            <input type={'submit'} onClick={ (e) => { this.sendFeedback(e) } } value={'Отправить'}/>
          </div>
        </form>
      </div>
    )
  }
}
