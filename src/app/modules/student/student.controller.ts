import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { IStudent } from './student.interface';
import { studentFilterableFields } from './student.constant';
import { StudentService } from './student.service';

const getAllStudents = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, studentFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await StudentService.getAllStudents(
    filters,
    paginationOptions
  );

  sendResponse<IStudent[]>(res, {
    success: true,
    message: 'Students retrieved successfully',
    data: result.data,
    meta: result.meta,
    statusCode: httpStatus.OK
  });
});

const getSingleStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await StudentService.getSingleStudent(id);
  sendResponse<IStudent>(res, {
    success: true,
    message: 'Student retrieved successfully',
    data: result,
    statusCode: httpStatus.OK
  });
});

const updateStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await StudentService.updateStudent(id, updatedData);
  sendResponse<IStudent>(res, {
    success: true,
    message: 'Student updated successfully',
    data: result,
    statusCode: httpStatus.OK
  });
});

const deleteStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await StudentService.deleteStudent(id);
  sendResponse<IStudent>(res, {
    success: true,
    message: 'Student deleted successfully',
    data: result,
    statusCode: httpStatus.OK
  });
});

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent
};
