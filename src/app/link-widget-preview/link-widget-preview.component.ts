import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-link-widget-preview',
  templateUrl: './link-widget-preview.component.html',
  styleUrls: ['./link-widget-preview.component.css']
})
export class LinkWidgetPreviewComponent implements OnInit {
  @Input() widget;
  constructor() { }

  ngOnInit() {
  }

}
