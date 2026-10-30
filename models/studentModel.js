import pool from '../config/db.js';

// Retrieve all students
export const fetch = async () => {
    const [rows] = await pool.query("SELECT * FROM student");
    return rows;
};
