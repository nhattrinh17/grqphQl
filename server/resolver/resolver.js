const Author = require("../modules/Author")
const Book = require("../modules/Book")

const resolvers = {
    // QUERY
    Query: {
        books: async (parent, args, context) => await context.mongoDataMethods.getAllBook(),
        book: async (parent, args, context) => await context.mongoDataMethods.getBookById(args.id),
        authors: async (parent, args, context) => await context.mongoDataMethods.getAllAuthor(),
        author: async (parent, args, context) => await context.mongoDataMethods.getAuthorById(args.id),
    },

    // MUTATION
    Mutation: {
        createAuthor: async (parent, args, context) =>  await context.mongoDataMethods.createAuthor(args),
        createBook:  async (parent, args, context) =>  await context.mongoDataMethods.createBook(args)
    },

    // Value
    Book: {
        author: async (parent, args, context) => await context.mongoDataMethods.getAuthorById(parent.authorId)
    },
    Author: {
        books: async (parent, args, context) => await context.mongoDataMethods.getAllBookByAuthorId(parent.id)
    }
}

module.exports = resolvers;