import {Component, OnInit} from '@angular/core';
import {WidgetServiceClient} from '../services/WidgetServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-list-component',
  templateUrl: './widget-list-component.component.html',
  styleUrls: ['./widget-list-component.component.css']
})
export class WidgetListComponentComponent implements OnInit{
  widgets;
  courseId;
  moduleId;
  lessonId;
  topicId;
  constructor(private route: ActivatedRoute, private widgetService: WidgetServiceClient) {
    this.route.params.subscribe(params => {
      const courseId = params['courseId'];
      const lessonId = params['lessonId'];
      const moduleId = params['moduleId'];
      const topicId = params['topicId'];
      if (!courseId || !moduleId || !lessonId || !topicId) {
        return;
      }
      this.courseId = courseId;
      this.moduleId = moduleId;
      this.lessonId = lessonId;
      this.topicId = topicId;
      this.widgetService.findWidgetsForTopic(topicId)
        .then(widgets => {
          this.widgets = widgets;
          this.widgets.sort((w1, w2) => {
            const idx1 = w1.index ? w1.index : -1;
            const idx2 = w2.index ? w2.index : -1;
            return (idx1 < idx2) ? -1 : (idx1 > idx2) ? 1 : 0;
          });
        });
    });
  }
  ngOnInit(): void {
  }
}
