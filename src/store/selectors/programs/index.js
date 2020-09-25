import { createSelector } from 'reselect';

const getProgramsState = state => state.data.programs;
const getProgramId = (state, programId) => programId;

export const getProgram = createSelector(
  [getProgramsState, getProgramId],
  (programs, programId) => programs.byId[programId]
);