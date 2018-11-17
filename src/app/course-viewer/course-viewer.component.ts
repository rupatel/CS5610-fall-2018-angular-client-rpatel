import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../services/CourseServiceClient';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {
  course;
  constructor(private route: ActivatedRoute, private service: CourseServiceClient) {
    const courseIdObs = this.route
      .paramMap
      .pipe(map(params => params.get('courseId') || 'None'));

    courseIdObs.subscribe(courseId =>
      this.service.findCourseById(courseId)
        .then(course => {
          this.course = course;
        }));
  }

  ngOnInit() {
  }
}
