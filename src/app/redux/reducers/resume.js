import { types } from '../constants/resume';

const initialState = {
  preview_text: '',
  skills: [],
  experience: [],
  education: [],
};

export default function resume(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_RESUME:
      return {
        ...state,
        preview_text: action.payload.preview_text,
        skills: action.payload.skills,
        experience: action.payload.experience,
        education: action.payload.education,
      }
    default:
      return state;
  }
}
