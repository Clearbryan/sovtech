import { GET_PEOPLE } from './queries';
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
}

export default new PeopleService()