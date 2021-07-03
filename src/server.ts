import 'dotenv/config'
import express, { Application } from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import Schema from './schema/schema'

const schema = new Schema()
const options: any = {
    schema,
    graphiql: true
}

export default class Server {
    app: Application
    constructor() {
        this.app = express()
        this.app.use(cors())
        
        this.app.use('/graphiql', graphqlHTTP(options))

        this.app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT} `))
    }
}



