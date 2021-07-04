import { SearchPeople } from './__generated__/SearchPeople';

import { QueryPeopleByPageVariables } from './__generated__/QueryPeopleByPage';
import { GET_PEOPLE, QUERY_PEOPLE_BY_PAGE, SEARCH_PEOPLE } from './queries';
import { apolloClient } from './../../graphql/index';
import { GetPeople } from './__generated__/GetPeople';
class PeopleService {
    async getPeople (): Promise<GetPeople["people"]> {
        try {
            const response = await apolloClient.query({ query: GET_PEOPLE })
            if (!response || !response.data)
                throw new Error ('Cannot get people data!')
            return response.data
        } catch (error) {
            throw error
        }

    }

    async searchPeople(searchString: String): Promise<SearchPeople["search"]> {
        try {
            const response = await apolloClient.query({ query: SEARCH_PEOPLE, variables: { name: searchString } })
            if (!response || !response.data)
                throw new Error ('Cannot get people data!')
            return response.data
        } catch (error) {
            throw error
        }
        
    }

    async queryPeoplePage(pageNumber: any): Promise<QueryPeopleByPageVariables["page"]> {
        try {
            const response = await apolloClient.query({ query: QUERY_PEOPLE_BY_PAGE, variables: { page: pageNumber } })
            if (!response || !response.data)
                throw new Error ('Cannot get people data!')
            return response.data
        } catch (error) {
            throw error
        }
    }

    
}

export default new PeopleService()