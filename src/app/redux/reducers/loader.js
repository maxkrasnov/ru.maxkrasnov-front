import { types } from '../constants/loader';

const initialState = {
  loader: types.NOT_LOADED,
  isLoaded: true,
};

export default function loader(state = initialState, action) {
  switch (action.type) {
    case types.LOADED:
      return { ...state, loader: types.LOADED, isLoaded: false }
    case types.UPLOADED:
      return { ...state, loader: types.UPLOADED, isLoaded: true }
    case types.NOT_LOADED:
      return { ...state, loader: types.NOT_LOADED }
    default:
      return state;
  }
}
