/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: people
// ====================================================

export interface people_people {
  __typename: "People";
  name: string | null;
  height: string | null;
  mass: string | null;
  gender: string | null;
  homeworld: string | null;
}

export interface people {
  people: (people_people | null)[] | null;
}

export interface peopleVariables {
  page?: number | null;
}
