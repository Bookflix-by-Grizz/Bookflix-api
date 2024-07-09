import Service from "../services/service.js";
import Book from "../models/Books/Book.js";

const bookService = new Service(Book);

const createBook = async(req, res) => {

    try {
        const newBook = await bookService.create(req.body);
        return res.json({
            msg: 'Book created',
            book: newBook,
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Error creating book',
            error,
        });
    }
};

export { createBook };
