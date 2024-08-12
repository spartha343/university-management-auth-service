import { model, Schema } from 'mongoose';
import { FacultyModel, IFaculty } from './faculty.interface';
import { bloodGroup, gender } from './faculty.constant';

const FacultySchema = new Schema<IFaculty, FacultyModel>(
  {
    id: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: {
        firstName: {
          type: String,
          required: true
        },
        middleName: {
          type: String
        },
        lastName: {
          type: String,
          required: true
        }
      },
      required: true
    },
    dateOfBirth: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      enum: gender
    },
    bloodGroup: {
      type: String,
      enum: bloodGroup
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    contactNo: {
      type: String,
      required: true,
      unique: true
    },
    emergencyContactNo: {
      type: String,
      required: true
    },
    presentAddress: {
      type: String,
      required: true
    },
    permanentAddress: {
      type: String,
      required: true
    },
    designation: {
      type: String,
      required: true
    },
    profileImage: {
      type: String
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
      required: true
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicDepartment',
      required: true
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
);

export const Faculty = model<IFaculty, FacultyModel>('Faculty', FacultySchema);
