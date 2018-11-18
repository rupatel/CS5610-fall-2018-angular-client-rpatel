import {Injectable} from '@angular/core';
@Injectable()
export class  ModuleServiceClient {
  URL = 'https://a7submissionjava.herokuapp.com';
  findAllModules() {
    return fetch(this.URL + '/api/module',
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json());
  }
  findModulesForCourse(courseId) {
    return fetch(this.URL + '/api/course/' + courseId + '/module',
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json());
  }
  findModuleById(moduleId) {
    return fetch(this.URL + '/api/module/' + moduleId,
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json());
  }
}
