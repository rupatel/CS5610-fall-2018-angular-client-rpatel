import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lesson-tabs-component',
  templateUrl: './lesson-tabs-component.component.html',
  styleUrls: ['./lesson-tabs-component.component.css']
})
export class LessonTabsComponentComponent implements OnInit {
  lessons = [
    {id : 1, title : 'Lesson1'},
    {id : 2, title : 'Lesson2'},
    {id : 3, title : 'Lesson3'},
    {id : 4, title : 'Lesson4'},
    {id : 5, title : 'Lesson5'},
    {id : 6, title : 'Lesson6'},
    {id : 7, title : 'Lesson7'},
    {id : 8, title : 'Lesson8'}];
  @Input()
  courseTitle;

  @Input()
  selectedLessonId;
  @Input()
  selectedTopicId;
  @Input()
  selectedModuleId;

  constructor() { }

  ngOnInit() {
  }

}
