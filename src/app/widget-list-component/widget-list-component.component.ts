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
            this.widgets.sort((w1, w2) => {
              const idx1 = w1.index ? w1.index : -1;
              const idx2 = w2.index ? w2.index : -1;
              return (idx1 < idx2) ? -1 : (idx1 > idx2) ? 1 : 0;
            });
          });
      }
    }
  }
  constructor(private widgetService: WidgetServiceClient) { }

  ngOnInit() {
  }

}
