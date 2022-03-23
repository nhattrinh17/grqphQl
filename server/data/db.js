const Book = require("../modules/Book")
const Author = require("../modules/Author")

const mongoDataMethods = {
    getAllBook: async () => await Book.find({}),
    getAllBookByAuthorId: async (authorId) => await Book.find({authorId: authorId}),
    getAllAuthor: async () => await Author.find({}),
    getBookById : async (id) => await Book.findById(id),
    getAuthorById : async (id) => await Author.findById(id),
    
    createAuthor: async (value) => {
        const newAuthor = new Author(value)
        return await newAuthor.save()
    },
    createBook: async (value) => {
        const newBook = new Book(value)
        return await newBook.save()
    }
}

module.exports = mongoDataMethods;