import { combineReducers } from 'redux';
// Reducers
import programs from './programs';
import sections from './sections';

export default combineReducers({
  data: combineReducers({
    programs,
    sections,
  }),
});
