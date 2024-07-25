import { Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createSemester = catchAsync(async (req: Request, res: Response) => {
  const { ...academicSemesterData } = req.body;
  const result =
    await AcademicSemesterService.createSemester(academicSemesterData);

  sendResponse(res, {
    success: true,
    message: 'Academic Semester created successfully',
    data: result,
    statusCode: httpStatus.OK
  });
});

export const AcademicSemesterController = {
  createSemester
};
