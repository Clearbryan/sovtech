/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchPeopleByInput
// ====================================================

export interface SearchPeopleByInput_search {
  __typename: "Search";
  name: string | null;
  height: string | null;
  mass: string | null;
  gender: string | null;
  homeworld: string | null;
}

export interface SearchPeopleByInput {
  search: (SearchPeopleByInput_search | null)[] | null;
}

export interface SearchPeopleByInputVariables {
  search?: string | null;
}
