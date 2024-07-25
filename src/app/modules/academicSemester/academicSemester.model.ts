import { model, Schema } from 'mongoose';
import {
  AcademicSemesterModel,
  IAcademicSemester
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
      type: Number,
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
  {
    timestamps: true
  }
);

academicSemesterSchema.pre('save', async function (next) {
  const doesExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year
  });
  if (doesExist) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'Academic Semester already exists !'
    );
  }
  next();
});

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
);

//handling same year and same semester issue
