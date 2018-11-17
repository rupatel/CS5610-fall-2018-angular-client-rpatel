import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  @Input()
  modules;
  constructor() { }

  ngOnInit() {
  }

}
