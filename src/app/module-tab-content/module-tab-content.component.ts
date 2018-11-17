import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-module-tab-content',
  templateUrl: './module-tab-content.component.html',
  styleUrls: ['./module-tab-content.component.css']
})
export class ModuleTabContentComponent implements OnInit {
  @Input()
  selectedModuleId;
  @Input()
  selectedCourseId;
  constructor() { }

  ngOnInit() {
  }

}
