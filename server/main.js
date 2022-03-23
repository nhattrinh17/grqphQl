const express =  require("express")
const { ApolloServer }  = require("apollo-server-express")
const mongoose = require('mongoose');
const mongoDataMethods = require("./data/db")

// Connect to MongooDb
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://nhattrinh17:nhat17112002@tutorialgrapgql.6x76t.mongodb.net/TutorialGrapgql?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true,
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log(error.message);
    }
}
// Connect to MongooDB
connectDB()

// Load schema and resolvers
const typeDefs = require("./schema/schema")
const resolvers = require("./resolver/resolver")


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({mongoDataMethods})
})

const app = express();
server.applyMiddleware({ app })

app.listen({port: 3030}, () => {
    console.log(`Server ready at http://localhost:3030${server.graphqlPath}`)
})
