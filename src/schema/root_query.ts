import axios from "axios"
import People from "./people"
import { GraphQLList, GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInt } from "graphql";

const PeopleType = new People().PeopleType()
const SearchType = new People().SearchType()
const api = process.env.API_URI

export default class Query {
    RootQuery(): GraphQLObjectType {
    return new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
        // people query 
        people: {
            type: new GraphQLList(PeopleType),
            args: {page: { type: GraphQLInt }},
            async resolve(parent, args) {
                const { page } = args
                try {
                    // if no page param is passed in the url, return all people
                    if(!page) {
                        const result = await axios.get(`${api}`)
                        return result.data.results
                    }else {
                        // if no page param is passed in the url, return the specific page
                        const result = await axios.get(`${api}?page=${page}`)
                        return result.data.results
                    }
                } catch (error) {
                    return error
                }
            }
        },

        // search query
        search: {
            type: new GraphQLList(SearchType),
            args: { name: { type: new GraphQLNonNull(GraphQLString) } },
            async resolve(parent, args) {
                const { name } = args
                try {
                    const result = await axios.get(`${api}?search=${name}`)
                    return result.data.results
                    
                } catch (error) {
                    return error
                }
            }
        }
        }
    })
    }
}