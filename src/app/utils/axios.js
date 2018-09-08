import axios from 'axios'
import { Router } from 'react-router'
import store from '../redux/store';
import * as actions from '../redux/actions/loader'

/**
 * Глоабльные настройки для axios
 * Все запросы к api
 * @type {string}
 */
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:8080'
} else {
  axios.defaults.baseURL = 'https://api.maxkrasnov.ru'
}

axios.interceptors.request.use((config) => {
  store.dispatch(actions.loaded())
  return config
}, (error) => {
  store.dispatch(actions.uploaded())
  Router.push('/404')
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  if (response.data.code === 101) {
    throw new Error()
  }
  store.dispatch(actions.uploaded())
  return response;
}, (error) => {
  store.dispatch(actions.uploaded())
  Router.push('/404')
  return Promise.reject(error)
})

export default axios
