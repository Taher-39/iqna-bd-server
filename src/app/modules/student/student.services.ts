import { Student } from './student.interface';
import { StudentModel } from './student.model';

const PostStudentInfoIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};
const GetAllStudentInfoIntoDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const GetSingleStudentInfoIntoDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  PostStudentInfoIntoDB,
  GetAllStudentInfoIntoDB,
  GetSingleStudentInfoIntoDB,
};
