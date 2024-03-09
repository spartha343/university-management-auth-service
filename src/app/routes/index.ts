import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { academicSemesterRoutes } from '../modules/AcademicSemester/academicSemester.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes
  },
  {
    path: '/academic-semesters',
    route: academicSemesterRoutes
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
