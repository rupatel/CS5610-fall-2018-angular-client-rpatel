import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModuleServiceClient} from '../services/ModuleServiceClient';

@Component({
  selector: 'app-module-list-component',
  templateUrl: './module-list-component.component.html',
  styleUrls: ['./module-list-component.component.css']
})
export class ModuleListComponentComponent implements OnInit {
  modules;
  selectedModuleId;
  courseId;
  constructor(private route: ActivatedRoute, private moduleService: ModuleServiceClient,
              private router: Router) {
      this.route.params.subscribe(params => {
      const courseId = params['courseId'];
      this.selectedModuleId = params['moduleId'];
      if (!courseId) {
        return;
      }
      this.courseId = courseId;
      this.moduleService.findModulesForCourse(courseId)
        .then(modules => {
          this.modules = modules;
          this.modules.sort((w1, w2) => {
              const idx1 = w1.id ? w1.id : -1;
              const idx2 = w2.id ? w2.id : -1;
              return (idx1 < idx2) ? -1 : (idx1 > idx2) ? 1 : 0;
            });
        });
    });
  }
  selectModule(moduleId) {
    if (!moduleId) {
      return;
    }
    this.selectedModuleId = moduleId;
    this.router.navigate(['course', this.courseId, 'module', moduleId, 'lesson']);
  }
  ngOnInit() {
  }
}
