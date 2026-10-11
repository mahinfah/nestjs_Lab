import { CourseController } from '../course/course.controller'; 
import { CourseService } from '../course/course.service';
import { AppService } from '../app.service';


import { Module } from '@nestjs/common';





@Module({
  imports: [],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule{}