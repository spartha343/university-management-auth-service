import { z } from 'zod';
import { bloodGroup, gender } from './faculty.constant';

const updateFacultyZodSchema = z.object({
  body: z.object({
    name: z
      .object({
        firstName: z.string({
          required_error: 'First Name is required'
        }),
        middleName: z.string().optional(),
        lastName: z.string({
          required_error: 'Last Name is required'
        })
      })
      .optional(),
    dateOfBirth: z.string().optional(),
    gender: z.enum([...gender] as [string, ...string[]]).optional(),
    bloodGroup: z.enum([...bloodGroup] as [string, ...string[]]),
    email: z.string().email().optional(),
    contactNo: z.string().optional(),
    emergencyContactNo: z.string().optional(),
    designation: z.string().optional(),
    presentAddress: z.string().optional(),
    permanentAddress: z.string().optional(),
    academicDepartment: z.string().optional(),
    academicFaculty: z.string().optional(),
    profileImage: z.string().optional()
  })
});

export const FacultyValidation = {
  updateFacultyZodSchema
};
