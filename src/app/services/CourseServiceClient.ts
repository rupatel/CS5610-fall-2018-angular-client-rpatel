import {Injectable} from '@angular/core';
@Injectable()
export class  CourseServiceClient {
  URL = 'http://localhost:8080';
  static findAllCourses() {
    return fetch(URL + '/api/profile',
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Typ': 'application/json'
        }
      }).then(response => response.json());
  }

  static findCourseById(id) {
    return fetch(URL + '/api/course/' + id,
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json());
  }
}
