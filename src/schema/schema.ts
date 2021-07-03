import Query from './root_query';
import { GraphQLSchema } from "graphql";

const query = new Query().RootQuery()

export default class Schema {
    constructor() {
        return new GraphQLSchema({ query });
    }
}
