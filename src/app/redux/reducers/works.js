import { types } from '../constants/works';

const initialState = {
  works: [],
  page: 1,
};

export default function works(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_WORKS:
      return { ...state, works: action.payload.data,  page: action.payload.page }
    default:
      return state;
  }
}
