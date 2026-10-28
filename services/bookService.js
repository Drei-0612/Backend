import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async () => {
    const books = await bookModel.fetch();
    return books;
};

export const createBook = async (book) => {
    const bookId = await bookModel.insert(book);
    return bookId;
};

export const editBook = async (id, book) => {
    const affectedRows = await bookModel.update(id, book);
    return affectedRows;
};
export const update = async (book) => {
const [result] = await pool.query (
"UPDATE book SET name= ?, author= ? WHERE id= ? ",
[book.name, book.author, book.id]
);
return result.affectedRows;
}

export const deleteBook = async (id) => {
    const affectedRows = await bookModel.remove(id);
    return affectedRows;
};

