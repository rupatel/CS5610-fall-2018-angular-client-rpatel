import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-link-widget-preview',
  templateUrl: './link-widget-preview.component.html',
  styleUrls: ['./link-widget-preview.component.css']
})
export class LinkWidgetPreviewComponent implements OnInit {
  @Input() widget;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect(link) {
    if (!link) {
      return;
    }
    window.open(link);
  }
}
