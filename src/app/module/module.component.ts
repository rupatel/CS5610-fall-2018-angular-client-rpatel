import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';
import {ModuleServiceClient} from '../services/ModuleServiceClient';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnChanges {
  @Input()
  selectedCourseId;
  selectedModuleId;
  modules;
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (const propName in changes) {
      if (propName === 'selectedCourseId') {
          const changedProp = changes[propName];
          if (!changedProp.currentValue) {
            return;
          }
          this.moduleService.findModulesForCourse(changedProp.currentValue)
            .then(modules => {
              this.modules = modules;
              if (this.modules.length > 0) {
                this.selectedModuleId = modules[0].id;
              }
            });
      }
    }
  }
  constructor(private moduleService: ModuleServiceClient) { }
}
