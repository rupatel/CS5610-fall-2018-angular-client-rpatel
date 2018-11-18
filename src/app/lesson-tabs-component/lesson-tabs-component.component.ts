import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange} from '@angular/core';
import {LessonServiceClient} from '../services/LessonServiceClient';


@Component({
  selector: 'app-lesson-tabs-component',
  templateUrl: './lesson-tabs-component.component.html',
  styleUrls: ['./lesson-tabs-component.component.css']
})
export class LessonTabsComponentComponent implements OnInit, OnChanges {
  lessons = [];
  @Input()
  courseTitle;
  @Input()
  selectedModuleId;
  @Input()
  selectedLessonId;
  @Output()
  selectedLessonIdChange = new EventEmitter<Number>();
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (const propName in changes) {
      if (propName === 'selectedModuleId') {
        const changedProp = changes[propName];
        if (!changedProp.currentValue) {
          return;
        }
        this.lessonService.findLessonsForModule(changedProp.currentValue)
          .then(lessons => {
            this.lessons = lessons;
            if (this.lessons.length > 0) {
              this.selectLesson(lessons[0].id);
            }
          });
      }
    }
  }
  selectLesson(lessonId) {
    this.selectedLessonId = lessonId;
    this.selectedLessonIdChange.emit(lessonId);
  }
  constructor(private lessonService: LessonServiceClient) { }

  ngOnInit() {
  }
}
