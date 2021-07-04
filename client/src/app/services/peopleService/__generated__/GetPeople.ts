/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPeople
// ====================================================

export interface GetPeople_people {
  __typename: "People";
  name: string | null;
  height: string | null;
  mass: string | null;
  gender: string | null;
  homeworld: string | null;
}

export interface GetPeople {
  people: (GetPeople_people | null)[] | null;
}

export interface GetPeopleVariables {
  page?: number | null;
}
