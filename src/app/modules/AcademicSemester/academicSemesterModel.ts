import { Schema, model } from 'mongoose';
import {
  IAcademicSemester,
  IAcademicSemesterModel
} from './academicSemester.interface';
import {
  academicSemesterCodes,
  academicSemesterMonths,
  academicSemesterTitles
} from './academicSemester.constant';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterTitles
    },
    year: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCodes
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonths
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonths
    }
  },
  { timestamps: true }
);

academicSemesterSchema.pre('save', async function (next) {
  const doesExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year
  });
  if (doesExist) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'Academic Semester already exist !'
    );
  }
  next();
});

export const AcademicSemester = model<
  IAcademicSemester,
  IAcademicSemesterModel
>('AcademicSemester', academicSemesterSchema);
