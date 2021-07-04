/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryPeopleByPage
// ====================================================

export interface QueryPeopleByPage_people {
  __typename: "People";
  name: string | null;
  height: string | null;
  mass: string | null;
  gender: string | null;
  homeworld: string | null;
}

export interface QueryPeopleByPage {
  people: (QueryPeopleByPage_people | null)[] | null;
}

export interface QueryPeopleByPageVariables {
  page?: number | null;
}
