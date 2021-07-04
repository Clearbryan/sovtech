import { IRootState } from './../../types';
import { createSelector } from "reselect"

const selectHomePage = (state: IRootState) => state.homePage

export const makeSelectPeoplePage = createSelector(selectHomePage, 
    (homePage) => homePage.people)