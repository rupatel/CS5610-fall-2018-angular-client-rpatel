import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-list-component',
  templateUrl: './widget-list-component.component.html',
  styleUrls: ['./widget-list-component.component.css']
})
export class WidgetListComponentComponent implements OnInit {
  widgets =  [
    {
      'type': 'HEADING',
      'size': '2',
      'text': 'The Document Object Model',
      'name' : 'Article Header',
      'index' : '1'
    },
    {
      'type': 'PARAGRAPH',
      'text': 'This topic introduces the DOM',
      'name' : 'abstract',
      'index' : '2'
    },
    {
      'type': 'LIST',
      'items': 'Nodes,Attributes,Tag names,IDs,Styles,Classes',
      'name' : 'module list',
      'isOrdered' : 'true',
      'index' : '3'
    },
    {
      'type': 'IMAGE',
      'src': 'https://picsum.photos/200',
      'name' : 'react lifecycle diagram',
      'index' : '4'
    },
    {
      'type': 'LINK',
      'title': 'The DOM',
      'href': 'https://en.wikipedia.org/wiki/Document_Object_Model',
      'name' : 'react docs link',
      'index' : '5'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
