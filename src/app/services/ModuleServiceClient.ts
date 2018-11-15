import {Injectable} from '@angular/core';
@Injectable()
export class  ModuleServiceClient {
  URL = 'http://localhost:8080';
  findAllModules() {
    return fetch(URL + '/api/module',
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json());
  }
  findModulesForCourse(courseId) {
    return fetch(URL + '/api/course/' + courseId + '/module',
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json());
  }
  findModuleById(moduleId) {
    return fetch(URL + '/api/module/' + moduleId,
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json());
  }
}
