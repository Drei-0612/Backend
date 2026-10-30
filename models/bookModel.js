import pool from '../config/db.js';

// Retrieve all books
export const fetch = async () => {
    const [rows] = await pool.query("SELECT * FROM book");
    return rows;
};

// Insert a new book
export const insert = async (book) => {
    const [result] = await pool.query(
        "INSERT INTO book (name, author) VALUES (?, ?)",
        [book.name, book.author]
    );
    return result.insertId;
};

// Update a book by id
export const update = async (id, book) => {
    const [result] = await pool.query(
        "UPDATE book SET name = ?, author = ? WHERE id = ?",
        [book.name, book.author, id]
    );
    return result.affectedRows;
};

// Delete a book by id
export const remove = async (id) => {
    const [result] = await pool.query("DELETE FROM book WHERE id = ?", [id]);
    return result.affectedRows;
};
