import express from 'express';
import validateRequest from '../../middleWares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';
import { academicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  academicSemesterController.createSemester
);

router.get('/:id', academicSemesterController.getSingleSemester);

router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
  academicSemesterController.updateSemester
);

router.delete('/:id', academicSemesterController.deleteSemester);

router.get('/', academicSemesterController.getAllSemesters);

export const academicSemesterRoutes = router;
