import {Injectable} from '@angular/core';
@Injectable()
export class  LessonServiceClient {
  URL = 'https://a7submissionjavav2.herokuapp.com';
  findAllLessons() {
    return fetch(this.URL + '/api/lesson',
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json());
  }
  findLessonsForModule(moduleId) {
    return fetch(this.URL + '/api/module/' + moduleId + '/lesson',
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json());
  }
  findLessonById(lessonId) {
    return fetch(this.URL + '/api/lesson/' + lessonId,
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json());
  }
}
