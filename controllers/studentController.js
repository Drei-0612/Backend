import * as studentService from '../services/studentService.js';

export const fetchAllStudents = async (req, res) => {
    try {
        const students = await studentService.fetchAllStudents();
        res.status(200).json(students);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e.message || "Internal Server Error" });
    }
};
