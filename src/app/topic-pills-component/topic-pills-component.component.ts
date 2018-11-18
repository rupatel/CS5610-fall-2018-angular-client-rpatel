import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-topic-pills-component',
  templateUrl: './topic-pills-component.component.html',
  styleUrls: ['./topic-pills-component.component.css']
})
export class TopicPillsComponentComponent implements OnInit {
  @Input()
  topics;
  @Input()
  selectedTopicId;
  @Output()
  selectedTopicIdChange = new EventEmitter<Number>();
  constructor() { }

  ngOnInit() {
  }

  selectTopic(topicId) {
    this.selectedTopicId = topicId;
    this.selectedTopicIdChange.emit(topicId);
  }
}
