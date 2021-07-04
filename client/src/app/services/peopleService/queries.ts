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

export const SEARCH_PEOPLE = gql`
    query SearchPeople($name: String!){
        search(name: $name){
            name,
            height,
            mass,
            gender,
            homeworld
        }
    }
`

export const QUERY_PEOPLE_BY_PAGE = gql`
    query QueryPeopleByPage($page: Int){
        people(page: $page) {
            name,
            height,
            mass,
            gender,
            homeworld
        }
    }
`


