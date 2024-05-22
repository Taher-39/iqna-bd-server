import { Request, Response } from 'express';
import { StudentServices } from './student.services';

const StudentPostInfoController = async (req: Request, res: Response) => {
  try {
    const { student: studentInfo } = req.body;

    if (!studentInfo) {
      return res.status(400).json({
        success: false,
        message: 'Student information is required.',
      });
    }

    const result = await StudentServices.PostStudentInfoIntoDB(studentInfo);
    res.status(201).json({
      success: true,
      message: 'Student information posted successfully.',
      data: result,
    });
  } catch (error) {
    console.error('Error posting student information:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while posting student information.',
      error: error,
    });
  }
};
const AllStudentGetInfoController = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.GetAllStudentInfoIntoDB();
    if (!result) {
      return res.status(400).json({
        success: false,
        message: 'Student information not find.',
      });
    }
    res.status(201).json({
      success: true,
      message: 'Student information get successfully.',
      data: result,
    });
  } catch (error) {
    console.error('Error get student information:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while get student information.',
      error: error,
    });
  }
};
const SingleStudentGetInfoController = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.GetSingleStudentInfoIntoDB(studentId);
    if (!result) {
      return res.status(400).json({
        success: false,
        message: 'Student information not find.',
      });
    }
    res.status(201).json({
      success: true,
      message: 'Student information get successfully.',
      data: result,
    });
  } catch (error) {
    console.error('Error get student information:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while get student information.',
      error: error,
    });
  }
};

export const StudentController = {
  StudentPostInfoController,
  AllStudentGetInfoController,
  SingleStudentGetInfoController,
};
