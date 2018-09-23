import { types } from '../constants/app';

export function setFrontVersion(version = '1.0.0') {
  return async function (dispatch, getState) {
    dispatch({ type: types.SET_APP_FRONT, payload: version });
  }
}

export function setBackVersion(version = '1.0.0') {
  return async function (dispatch, getState) {
    dispatch({ type: types.SET_APP_BACK, payload: version });
  }
}
