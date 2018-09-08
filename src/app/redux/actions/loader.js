import { types } from '../constants/loader';

export function loaded() {
  return async function (dispatch, getState) {
    dispatch({ type: types.LOADED });
  }
}

export function uploaded() {
  return async function (dispatch, getState) {
    dispatch({ type: types.UPLOADED });
    setTimeout(() => {
      dispatch({ type: types.NOT_LOADED });
    }, 500)
  }
}
