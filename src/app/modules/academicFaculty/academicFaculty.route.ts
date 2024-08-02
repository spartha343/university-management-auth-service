import express from 'express';
import { academicFacultyController } from './academicFaculty.controller';
import validateRequest from '../../middlewares/validateRequest';
import { academicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();

router.post(
  '/create-faculty',
  validateRequest(academicFacultyValidation.createAcademicFacultyZodSchema),
  academicFacultyController.createFaculty
);

router.get('/:id', academicFacultyController.getSingleFaculty);

router.patch(
  '/:id',
  validateRequest(academicFacultyValidation.updateAcademicFacultyZodSchema),
  academicFacultyController.updateFaculty
);

router.delete('/:id', academicFacultyController.deleteFaculty);

router.get('/', academicFacultyController.getAllFaculties);

export const AcademicFacultyRoutes = router;
