import Connector from '../Connector';

// Base authentication parameters:
const BASE_URL = 'https://api.themoviedb.org/3',
      API_KEY = 'fde07e2964c7cf47c314d2aa8c35e30c';

/**
 * Builds the API connector for the given base endpoint.
 * @param {*} endpoint
 */
function _request(endpoint) {
  return new Connector(BASE_URL + endpoint);
}

// List of all base endpoints:
const ENDPOINTS = {
  DISCOVER: '/discover',
  MOVIE: '/movie',
  TRENDING: '/trending',
  TV: '/tv',
};

/**
 * DISCOVER endpoint function calls.
 */
const discover = {

  /**
   * DISCOVER/MOVIE sub-endpoint function calls.
   */
  movie: {
 
    /**
     * Get "Netflix Originals" section.
     */
    get: (genre) => (
      _request(ENDPOINTS.DISCOVER).get(`/movie`, {
        api_key: API_KEY,
        with_genres: genre,
      })
    ),
  },

  /**
   * DISCOVER/TV sub-endpoint function calls.
   */
  tv: {
 
    /**
     * Get "Netflix Originals" section.
     */
    get: () => (
      _request(ENDPOINTS.DISCOVER).get(`/tv`, {
        api_key: API_KEY,
        with_network: 213,
      })
    ),
  }
};

/**
 * TRENDING endpoint function calls.
 */
const trending = {

  /**
   * Get "Trending Now" section. 
   */
  get: () => (
    _request(ENDPOINTS.TRENDING).get(`/all/week`, {
      api_key: API_KEY,
    })
  ),
};

/**
 * MOVIE endpoint function calls.
 */
const movie = {

  /**
   * Fetch details of the movie.
   */
  get: (movieId) => (
    _request(ENDPOINTS.MOVIE).get(`/${movieId}`, {
      api_key: API_KEY,
    })
  ),

  /**
   * MOVIE/TOP_RATED sub-endpoint function calls.
   */
  topRated: {
 
    /**
     * Get "Popular on Netflix" section.
     */
    get: () => (
      _request(ENDPOINTS.MOVIE).get(`/top_rated`, {
        api_key: API_KEY,
      })
    ),
  }
};

/**
 * DETAILS endpoint function calls.
 */
const details = {

  /**
   * Fetch details of the TV show.
   */
  get: (mediaId, mediaType) => (
    _request(mediaType === 'movie' ? ENDPOINTS.MOVIE : ENDPOINTS.TV).get(`/${mediaId}`, {
      api_key: API_KEY,
    })
  ),
};

export default {
  discover,
  movie,
  details,
  trending,
};
