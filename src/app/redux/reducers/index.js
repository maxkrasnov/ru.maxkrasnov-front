import { combineReducers } from 'redux';
import posts from './posts';
import works from './works';
import resume from './resume';
import loader from './loader';
import app from './app';

const reducers = combineReducers({
  app,
  posts,
  resume,
  works,
  loader,
});

export default reducers;
