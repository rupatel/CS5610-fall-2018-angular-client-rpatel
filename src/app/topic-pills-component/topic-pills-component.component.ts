import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TopicServiceClient} from '../services/TopicServiceClient';

@Component({
  selector: 'app-topic-pills-component',
  templateUrl: './topic-pills-component.component.html',
  styleUrls: ['./topic-pills-component.component.css']
})
export class TopicPillsComponentComponent implements OnInit {
  topics;
  selectedTopicId;
  courseId;
  moduleId;
  lessonId;
  constructor(private route: ActivatedRoute, private topicService: TopicServiceClient,
              private router: Router) {
    this.route.params.subscribe(params => {
      const courseId = params['courseId'];
      const lessonId = params['lessonId'];
      const moduleId = params['moduleId'];
      this.courseId = courseId;
      this.moduleId = moduleId;
      this.lessonId = lessonId;
      this.selectedTopicId = params['topicId'];
      if (!courseId || !moduleId || !lessonId) {
        return;
      }
      this.topicService.findTopicsForLesson(lessonId)
        .then(topics => {
          this.topics = topics;
          this.topics.sort((w1, w2) => {
            const idx1 = w1.id ? w1.id : -1;
            const idx2 = w2.id ? w2.id : -1;
            return (idx1 < idx2) ? -1 : (idx1 > idx2) ? 1 : 0;
          });
        });
    });
  }
  selectTopic(topicId) {
    if (!topicId) {
      return;
    }
    this.selectedTopicId = topicId;
    this.router.navigate(['course', this.courseId, 'module', this.moduleId,
      'lesson', this.lessonId, 'topic', this.selectedTopicId, 'widget']);
  }

  ngOnInit(): void {
  }
}
