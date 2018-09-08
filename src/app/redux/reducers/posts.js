import { types } from '../constants/posts';

const initialState = {
  posts: [],
  post: {},
  page: 1,
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_POSTS:
      return { ...state, posts: action.payload.data, page: action.payload.page }
    case types.LOAD_POST:
      return { ...state, post: action.payload }
    default:
      return state;
  }
}
