import { SET_LOADING, UPDATE_SECTION } from '../../actions/sections/types';

const initialState = {
  isLoading: false,
  byId: {},
  order: ['originals', 'trending', 'popular', 'action', 'comedy', 'horror', 'romance', 'documentaries'],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {...state, isLoading: action.loading};
    case UPDATE_SECTION:
      return {...state, byId: {...state.byId, [action.section.id]: action.section}};
    default:
      return state;
  }
}