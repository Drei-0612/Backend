import * as studentController from '../controllers/bookController.js';

import express from 'express';

const studentRoutes = express.Router();

studentRoutes.get('/', studentController.fetchAllStudents);

export default studentRoutes;