import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],

})
export class CourseCardComponent implements OnInit {
  @Input() course;
  courseDescription = 'A single-page application (SPA) is a web application or web site that interacts with the ' +
      'user by dynamically rewriting the current page rather than loading entire new pages from a server. ' +
      'This approach avoids interruption of the user experience between successive pages, making the application ' +
      'behave more like a desktop application. In an SPA, either all necessary code – HTML, JavaScript, and CSS – ' +
      'is retrieved with a single page load,[1] or the appropriate resources are dynamically ' +
      'loaded and added to the page as necessary, usually in response to user actions. ' +
      'The page does not reload at any point in the process, nor does control transfer to another page, ' +
      'although the location hash or the HTML5 History API can be used to provide the perception and navigability ' +
      'of separate logical pages in the application.[2] Interaction with the single page application often involves ' +
      'dynamic communication with the web server behind the scenes.';

  constructor() { }

  ngOnInit() {
  }

}
