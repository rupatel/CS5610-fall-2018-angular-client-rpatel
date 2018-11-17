import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-widget-preview',
  templateUrl: './image-widget-preview.component.html',
  styleUrls: ['./image-widget-preview.component.css']
})
export class ImageWidgetPreviewComponent implements OnInit {
  @Input() widget;
  constructor() { }

  ngOnInit() {
  }

}
