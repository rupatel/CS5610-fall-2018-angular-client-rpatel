import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-module-list-component',
  templateUrl: './module-list-component.component.html',
  styleUrls: ['./module-list-component.component.css']
})
export class ModuleListComponentComponent implements OnInit {
  @Input()
  selectedModuleId;
  @Output()
  selectedModuleIdChange = new EventEmitter<number>();

  @Input()
  modules;
  constructor() {
  }
  selectModule(moduleId) {
    this.selectedModuleId = moduleId;
    this.selectedModuleIdChange.emit(moduleId);
  }
  ngOnInit() {
  }
}
