import Request from 'axios';
import { types } from '../constants/resume';

function getResumeFromAPI() {
  return Request.get('/resume')
}

export function getResume() {
  return async function (dispatch, getState) {
    const { data } = await getResumeFromAPI();
    dispatch({ type: types.LOAD_RESUME, payload: data });
  }
}
