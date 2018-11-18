import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';
import {WidgetServiceClient} from '../services/WidgetServiceClient';

@Component({
  selector: 'app-widget-list-component',
  templateUrl: './widget-list-component.component.html',
  styleUrls: ['./widget-list-component.component.css']
})
export class WidgetListComponentComponent implements OnInit, OnChanges {
  @Input()
  selectedTopicId;
  widgets =  [];
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (const propName in changes) {
      if (propName === 'selectedTopicId') {
        const changedProp = changes[propName];
        if (!changedProp.currentValue) {
          return;
        }
        this.widgetService.findWidgetsForTopic(changedProp.currentValue)
          .then(widgets => {
            this.widgets = widgets;
          });
      }
    }
  }
  constructor(private widgetService: WidgetServiceClient) { }

  ngOnInit() {
  }

}
