import { combineReducers } from 'redux';
import posts from './posts';
import works from './works';
import resume from './resume';
import loader from './loader';

const reducers = combineReducers({
  posts,
  resume,
  works,
  loader,
});

export default reducers;
