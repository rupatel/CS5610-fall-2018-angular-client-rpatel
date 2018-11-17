import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-module-list-component',
  templateUrl: './module-list-component.component.html',
  styleUrls: ['./module-list-component.component.css']
})
export class ModuleListComponentComponent implements OnInit {
  @Input()
  selectedCourseId;
  @Input()
  selectedModuleId;
  @Input()
  modules;
  selectModule(moduleId) {
    this.selectedModuleId = moduleId;
  }
  constructor() {
  }
  ngOnInit() {
  }
}
