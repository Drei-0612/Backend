import * as bookService from '../services/bookService.js';

export const fetchAllBooks = async (req, res) => {
    try {
        const books = await bookService.fetchAllBooks();
        res.status(200).json(books);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e.message || "Internal Server Error" });
    }
};

export const createBook = async (req, res) => {
    try {
        const { name, author } = req.body || {};

        if (!name || !author) {
            return res.status(400).json({ error: "Name and author are required" });
        }

        const book = { name, author };
        const bookId = await bookService.createBook(book);

        res.status(200).json({
            success: true,
            message: bookId
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e.message || "Internal Server Error" });
    }
};

export const editBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, author } = req.body || {};

        if (!name || !author) {
            return res.status(400).json({ error: "Name and author are required" });
        }

        const book = { name, author };
        const affectedRows = await bookService.editBook(id, book);

        if (affectedRows === 0) {
            return res.status(404).json({ error: "Book not found" });
        }

        res.status(200).json({ success: true, message: "Book updated successfully" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e.message || "Internal Server Error" });
    }
};

export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await bookService.deleteBook(parseInt(id));

        if (deletedBook === 0) {
            return res.status(404).json({ error: "Book not found" });
        }

        res.status(200).json({
            success: true,
            message: "Book deleted successfully"
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e.message || "Internal Server Error" });
    }
};
