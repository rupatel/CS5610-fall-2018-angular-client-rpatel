import {Component, OnInit} from '@angular/core';
import {LessonServiceClient} from '../services/LessonServiceClient';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseServiceClient} from '../services/CourseServiceClient';


@Component({
  selector: 'app-lesson-tabs-component',
  templateUrl: './lesson-tabs-component.component.html',
  styleUrls: ['./lesson-tabs-component.component.css']
})
export class LessonTabsComponentComponent implements OnInit{
  lessons = [];
  courseTitle;
  courseId;
  moduleId;
  selectedLessonId;
  constructor(private route: ActivatedRoute, private lessonService: LessonServiceClient,
  private router: Router, private courseService: CourseServiceClient) {
    this.route.params.subscribe(params => {
      const courseId = params['courseId'];
      const moduleId = params['moduleId'];
      this.selectedLessonId = params['lessonId'];
      if (courseId) {
        courseService.findCourseById(courseId)
          .then(course => {
            this.courseTitle = course.title;
          });
      }
      if (!courseId || !moduleId) {
        return;
      }
      this.courseId = courseId;
      this.moduleId = moduleId;
      this.lessonService.findLessonsForModule(moduleId)
        .then(lessons => {
          this.lessons = lessons;
          this.lessons.sort((w1, w2) => {
            const idx1 = w1.id ? w1.id : -1;
            const idx2 = w2.id ? w2.id : -1;
            return (idx1 < idx2) ? -1 : (idx1 > idx2) ? 1 : 0;
          });
        });
    });
  }
  ngOnInit(): void {
  }
  selectLesson(lessonId) {
    if (!lessonId) {
      return;
    }
    this.selectedLessonId = lessonId;
    this.router.navigate(['course', this.courseId, 'module',
      this.moduleId, 'lesson' , this.selectedLessonId , 'topic']);
  }
}
