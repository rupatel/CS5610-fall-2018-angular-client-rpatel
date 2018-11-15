import {Injectable} from '@angular/core';
@Injectable()
export class  TopicServiceClient {
  URL = 'http://localhost:8080';
  findAllTopics() {
    return fetch(URL + '/api/topic',
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json());
  }
  findTopicsForLesson(lessonId) {
    return fetch(URL + '/api/lesson/' + lessonId + '/topic',
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json());
  }
  findTopicById(topicId) {
    return fetch(URL + '/api/topic/' + topicId,
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json());
  }
}
