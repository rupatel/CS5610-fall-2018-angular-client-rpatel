import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange} from '@angular/core';
import {TopicServiceClient} from '../services/TopicServiceClient';

@Component({
  selector: 'app-module-tab-content',
  templateUrl: './module-tab-content.component.html',
  styleUrls: ['./module-tab-content.component.css']
})
export class ModuleTabContentComponent implements OnInit, OnChanges {
  @Input()
  selectedLessonId;
  @Input()
  selectedTopicId;
  @Output()
  selectedTopicIdChange = new EventEmitter<Number>();
  topics;
  constructor(private topicService: TopicServiceClient) { }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (const propName in changes) {
      if (propName === 'selectedLessonId') {
        const changedProp = changes[propName];
        if (!changedProp.currentValue) {
          return;
        }
        this.topicService.findTopicsForLesson(changedProp.currentValue)
          .then(topics => {
            this.topics = topics;
            if (this.topics.length > 0) {
              this.selectTopic(topics[0].id);
            }
          });
      }
    }
  }
  ngOnInit() {
  }
  selectTopic(topicId) {
    this.selectedTopicIdChange.emit(topicId);
    this.selectedTopicId = topicId;
  }
}
