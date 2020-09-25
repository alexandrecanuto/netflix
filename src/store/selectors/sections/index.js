import { createSelector } from 'reselect';

const getSectionsState = state => state.data.sections;

export const getHomeSections = createSelector(
  [getSectionsState],
  (sections) => sections.order.map(sectionId => sections.byId[sectionId]).filter(section => !!section)
);

export const getIsLoading = createSelector(
  [getSectionsState],
  (sections) => sections.isLoading
);