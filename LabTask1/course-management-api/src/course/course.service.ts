import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  getAllCourses(): string {
    return 'Get All Courses - from Service';
  }

  getCourseById(id: string): string {
    return `Get Course with ID: ${id} from   Service`;
  }

  createCourse(): string {
    return 'Created courrse';
  }

  updateCourse(id: string): string {
    return `Update Course ${id} `;
  }

  patchCourse(id: string): string {
    return `Patch Course ${id} `;
  }

  deleteCourse(id: string): string {
    return `Delete Course with id = ${id} `;
  }
}