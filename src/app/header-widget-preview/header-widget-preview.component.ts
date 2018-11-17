import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-widget-preview',
  templateUrl: './header-widget-preview.component.html',
  styleUrls: ['./header-widget-preview.component.css']
})
export class HeaderWidgetPreviewComponent implements OnInit {
  @Input() widget;
  constructor() { }

  ngOnInit() {
  }
}
