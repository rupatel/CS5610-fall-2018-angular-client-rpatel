import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paragraph-widget-preview',
  templateUrl: './paragraph-widget-preview.component.html',
  styleUrls: ['./paragraph-widget-preview.component.css']
})
export class ParagraphWidgetPreviewComponent implements OnInit {
  @Input() widget;
  constructor() { }

  ngOnInit() {
  }

}
