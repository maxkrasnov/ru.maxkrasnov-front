import { types } from '../constants/app';
import Request from '../../utils/axios';

export function setFrontVersion(version = '1.0.0') {
  return async function (dispatch, getState) {
    dispatch({ type: types.SET_APP_FRONT, payload: version });
  }
}


function getVersionFromAPI() {
  return Request.get('/')
}


export function setBackVersion() {
  return async function (dispatch, getState) {
    const { data } = await getVersionFromAPI();
    dispatch({ type: types.SET_APP_BACK, payload: data.version });
  }
}
