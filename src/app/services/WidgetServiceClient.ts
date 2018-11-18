import {Injectable} from '@angular/core';
@Injectable()
export class  WidgetServiceClient {
  URL = 'http://localhost:8080';
  findAllWidgets() {
    return fetch(this.URL + '/api/widget',
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json());
  }
  findWidgetsForTopic(topicId) {
    return fetch(this.URL + '/api/topic/' + topicId + '/widget',
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json());
  }
  findWidgetById(widgetId) {
    return fetch(this.URL + '/api/widget/' + widgetId,
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json());
  }
}
