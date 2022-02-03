
# Dependencies
Node.js (https://nodejs.org/en/)<br />
Apollo (https://www.apollographql.com/)<br />
Graphql (https://graphql.org/) <br />
React (https://reactjs.org/)
# Usage
Clone main repository and run ```cd sovtech```
# Environment variables
Create Environment variables by running a simple command. Command syntax ```npm run env:generate ${ENV_VARNAME}={ENV_VARKEY} ${ENV_VARNAME}={ENV_VARKEY} ```. You can chain all the environment variables in one command separated by spaces 
<br />
Example env script generation for this project: 
```
npm run env:generate NODE_ENV=development PORT=4000 API_URI=https://swapi.dev/api/people/
```
# Installing Dependencies
Backend Server Dependencies run ```npm install && npm install graphql``` <br />
Client/Frontend Dependencies run ```npm run client:install```

# Build GraphQL Schema
*Note (You have to have the Grahpql server running (```npm run server```) before running the following command)<br>
```npm run schema:download && npm run schema:generate-watch ```

# Start App
```npm run sovtech```

# Test App
Frontend: navigate to http://localhost:3000 <br>
Backend: navigate to http://localhost:4000/graphiql

# TODO
Write Tests







