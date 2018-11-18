import {Injectable} from '@angular/core';
@Injectable()
export class  CourseServiceClient {
  URL = 'https://a7submissionjava.herokuapp.com';
  findAllCourses() {
    return fetch(this.URL + '/api/course',
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Typ': 'application/json'
        }
      }).then(response =>  response.json());
  }

  findCourseById(id) {
    return fetch(this.URL + '/api/course/' + id,
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json());
  }
}
