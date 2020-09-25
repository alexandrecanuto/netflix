// Actions
import { requestGenre, requestOriginals, requestPopular, requestTrending } from '../programs';
// Types
import { SET_LOADING, UPDATE_SECTION } from './types';

/**
 * Locally createsa / updates a section.
 */
export const setLoading = (loading) => {
  console.log('setLoading');
  return {
    type: SET_LOADING,
    loading,
  };
}

/**
 * Locally createsa / updates a section.
 */
export const updateSection = (section) => {
  return {
    type: UPDATE_SECTION,
    section,
  };
}

/**
 * Request Netflix Originals.
 */
export const requestHomeSections = () => {
  return async (dispatch) => {
    dispatch(requestOriginals());
    dispatch(requestTrending());
    dispatch(requestPopular());
    dispatch(requestGenre(28, 'action', 'Action'));
    dispatch(requestGenre(35, 'comedy', 'Comedy'));
    dispatch(requestGenre(27, 'horror', 'Horror'));
    dispatch(requestGenre(10749, 'romance', 'Romance'));
    dispatch(requestGenre(99, 'documentaries', 'Documentaries'));
  };
}