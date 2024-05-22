import express from 'express';
import { StudentController } from './student.controller';
const router = express.Router();

router.post('/post-student-info', StudentController.StudentPostInfoController);

router.get('/', StudentController.AllStudentGetInfoController);
router.get('/:studentId', StudentController.SingleStudentGetInfoController);

export const StudentRoutes = router;
