import { types } from '../constants/app';

const initialState = {
  front: 'v1.0.0',
  back: 'v1.0.0',
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case types.SET_APP_BACK:
      return { ...state, back: action.payload }
    case types.SET_APP_FRONT:
      return { ...state, front: action.payload }
    default:
      return state;
  }
}
