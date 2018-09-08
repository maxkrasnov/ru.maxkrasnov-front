import Request from '../../utils/axios';
import { types } from '../constants/posts';

function getPostsFromAPI(page) {
  let url = ''
  if (page > 1) {
    url = `?page=${page}`
  }
  return Request.get(`/notes${url}`)
}

function getPostFromAPI(code) {
  return Request.get(`/notes/${code}`)
}

export function getPosts(page = 1) {
  return async function (dispatch, getState) {
    const { data } = await getPostsFromAPI(page);
    const ob = { data, page }
    dispatch({ type: types.LOAD_POSTS, payload: ob });
  }
}

export function getPost(code) {
  return async function (dispatch, getState) {
    const { data } = await getPostFromAPI(code);
    dispatch({ type: types.LOAD_POST, payload: data });
  }
}
