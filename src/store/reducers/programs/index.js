import { SET_FEATURED, UPDATE_PROGRAMS } from '../../actions/programs/types';

const initialState = {
  featured: null,
  allIds: [],
  byId: {},
};

export default function(state = initialState, action) {
  let allIds = [],
      byId = {};

  switch (action.type) {
    case SET_FEATURED: 
      return {
        ...state,
        featured: action.featured,
      }
    case UPDATE_PROGRAMS:
      allIds = state.allIds;
      byId = state.byId;

      // Add / update each program:
      action.programs.forEach(program => {
        byId[program.id] = program;
      });

      // Update the IDs:
      allIds = Object.keys(byId);

      return {
        ...state,
        allIds,
        byId,
      };
    default:
      return state;
  }
}