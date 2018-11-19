import {Injectable} from '@angular/core';
@Injectable()
export class  TopicServiceClient {
  URL = 'https://a7submissionjavav2.herokuapp.com';
  findAllTopics() {
    return fetch(this.URL + '/api/topic',
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json());
  }
  findTopicsForLesson(lessonId) {
    return fetch(this.URL + '/api/lesson/' + lessonId + '/topic',
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json());
  }
  findTopicById(topicId) {
    return fetch(this.URL + '/api/topic/' + topicId,
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json());
  }
}
