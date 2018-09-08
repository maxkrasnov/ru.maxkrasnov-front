import Request from '../../utils/axios';
import { types } from '../constants/works';

function getWorksFromAPI(page = 1) {
  let url = ''
  if (page > 1) {
    url = `?page=${page}`
  }
  return Request.get(`/projects${url}`)
}

export function getWorks(page = 1) {
  return async function (dispatch, getState) {
    const { data } = await getWorksFromAPI(page);
    const ob = { data, page }
    dispatch({ type: types.LOAD_WORKS, payload: ob });
  }
}
