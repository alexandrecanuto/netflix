// Actions
import { updateSection } from '../sections';
// Types
import { UPDATE_PROGRAMS } from './types';
// Services
import { APIService } from '../../../services';

/**
 * Locally updates the programs with new ones.
 */
export const updatePrograms = (programs) => {
  return {
    type: UPDATE_PROGRAMS,
    programs,
  };
}

/**
 * Request Netflix Originals section.
 */
export const requestOriginals = () => requestSection(APIService.discover.tv.get, 'originals', 'Netflix Originals')

/**
 * Request Trending section.
 */
export const requestTrending = () => requestSection(APIService.trending.get, 'trending', 'Trending Now')

/**
 * Request Popular on Netflix section.
 */
export const requestPopular = () => requestSection(APIService.movie.topRated.get, 'popular', 'Popular on Netflix')

/**
 * Request a genre section.
 */
export const requestGenre = (genre, id, title) => {
  return async (dispatch) => {
    const res = await APIService.discover.movie.get(genre);
    
    if (!res || !res.results)
      return;

    // Update the programs:
    res && res.results && dispatch(updatePrograms(res.results));

    // Create the section:
    dispatch(updateSection({
      id,
      items: res.results.map(program => program.id),
      title,
    }));

    return res;
  };
}

/**
 * Request a section.
 */
export const requestSection = (endpoint, id, title) => {
  return async (dispatch) => {
    const res = await endpoint();
    
    if (!res || !res.results)
      return;

    // Update the programs:
    res && res.results && dispatch(updatePrograms(res.results));

    // Create the section:
    dispatch(updateSection({
      id,
      items: res.results.map(program => program.id),
      title,
    }));

    return res;
  };
}