import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-pills-component',
  templateUrl: './topic-pills-component.component.html',
  styleUrls: ['./topic-pills-component.component.css']
})
export class TopicPillsComponentComponent implements OnInit {
  topics = [{id : 1, title : 'Top1'},
    {id : 2, title : 'Top2'},
    {id : 3, title : 'Top3'},
    {id : 4, title : 'Top4'},
    {id : 5, title : 'Top5'},
    {id : 6, title : 'Top6'},
    {id : 7, title : 'Top7'},
    {id : 8, title : 'Top8'}];
  constructor() { }

  ngOnInit() {
  }

}
