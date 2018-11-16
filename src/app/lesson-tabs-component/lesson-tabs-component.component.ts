import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-tabs-component',
  templateUrl: './lesson-tabs-component.component.html',
  styleUrls: ['./lesson-tabs-component.component.css']
})
export class LessonTabsComponentComponent implements OnInit {
  lesson = {title : 'JS'};
  courseTitle = 'CS5800';
  constructor() { }

  ngOnInit() {
  }

}
