import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-widget-preview',
  templateUrl: './list-widget-preview.component.html',
  styleUrls: ['./list-widget-preview.component.css']
})
export class ListWidgetPreviewComponent implements OnInit {
  @Input() widget;
  constructor() { }
  get list() {
    console.log('>>>>>>>>>>>>>' + this.widget.items);
    return this.widget.items ? this.widget.items.split(',') : [];
  }
  ngOnInit() {
  }
}
