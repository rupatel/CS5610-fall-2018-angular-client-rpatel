import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  @Input()
  selectedTopicId;
  @Output()
  selectedTopicIdChange = new EventEmitter<Number>();
  @Input()
  topics;
  constructor() { }

  ngOnInit() {
  }
  selectTopic(topicId) {
    this.selectedTopicId = topicId;
    this.selectedTopicIdChange.emit(topicId);
  }
}
