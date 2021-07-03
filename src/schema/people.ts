import { GraphQLID, GraphQLString, GraphQLObjectType } from 'graphql';

export default class Person {
    // people query
    PeopleType(): GraphQLObjectType {
        return new GraphQLObjectType({
            name: 'People',
            fields: () =>({
                name: { type: GraphQLString },
                height: { type: GraphQLID },
                mass: { type: GraphQLID },
                gender: { type: GraphQLString },
                homeworld: { type: GraphQLString }
            })
        })
    }

    // search query
    SearchType(): GraphQLObjectType {
        return new GraphQLObjectType({
            name: 'Search',
            fields: () => ({
                name: { type: GraphQLString },
                height: { type: GraphQLID },
                mass: { type: GraphQLID },
                gender: { type: GraphQLString },
                homeworld: { type: GraphQLString }
            })
        }) 
    }
}