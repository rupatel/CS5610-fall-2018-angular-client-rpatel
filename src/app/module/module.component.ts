import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange} from '@angular/core';
import {ModuleServiceClient} from '../services/ModuleServiceClient';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnChanges {
  @Input()
  selectedCourseId;

  @Input()
  selectedModuleId;

  @Output()
  selectedModuleIdChange = new EventEmitter<number>();

  @Input()
  selectedTopicId;

  @Output()
  selectedTopicIdChange = new EventEmitter<number>();

  @Input()
  selectedLessonId;

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
                this.selectModule(modules[0].id);
              }
            });
      }
    }
  }
  selectTopic(topicId) {
    this.selectedTopicId = topicId;
    this.selectedTopicIdChange.emit(topicId);
  }
  selectModule(moduleId){
    this.selectedModuleId = moduleId;
    this.selectedModuleIdChange.emit(this.selectedModuleId);
  }
  constructor(private moduleService: ModuleServiceClient) { }
}
