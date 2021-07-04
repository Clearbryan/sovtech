/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchPeople
// ====================================================

export interface SearchPeople_search {
  __typename: "Search";
  name: string | null;
  height: string | null;
  mass: string | null;
  gender: string | null;
  homeworld: string | null;
}

export interface SearchPeople {
  search: (SearchPeople_search | null)[] | null;
}

export interface SearchPeopleVariables {
  name: string;
}
