import { gql } from 'graphql-tag';

export const GET_PEOPLE = gql`
    query GetPeople($page: Int){
        people(page: $page) {
            name,
            height,
            mass,
            gender,
            homeworld
        }
    }
`