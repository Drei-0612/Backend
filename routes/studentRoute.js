import express from 'express';
import * as studentController from '../controllers/studentController.js';

const studentRoutes = express.Router();

studentRoutes.get('/', studentController.fetchAllStudents);

export default studentRoutes;
