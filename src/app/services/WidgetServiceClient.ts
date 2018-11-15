import {Injectable} from '@angular/core';
@Injectable()
export class  WidgetServiceClient {
  URL = 'http://localhost:8080';
  findAllWidgets() {
    return fetch(URL + '/api/widget',
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  }
  findWidgetsForTopic(topicId) {
    return fetch(URL + '/api/topic/' + topicId + '/widget',
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  }
  findWidgetById(widgetId) {
    return fetch(URL + '/api/widget/' + widgetId,
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  }
}
