import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseGridComponentComponent} from './course-grid-component/course-grid-component.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {ModuleListComponentComponent} from './module-list-component/module-list-component.component';
import {LessonTabsComponentComponent} from './lesson-tabs-component/lesson-tabs-component.component';
import {TopicPillsComponentComponent} from './topic-pills-component/topic-pills-component.component';
import {WidgetListComponentComponent} from './widget-list-component/widget-list-component.component';

const routes: Routes = [
  {path : '', component : CourseGridComponentComponent},
  {path : 'course', component : CourseGridComponentComponent},
  {path : 'course/:courseId/module', component : CourseViewerComponent},
  {path : 'course/:courseId/module/:moduleId/lesson', component : CourseViewerComponent},
  {path : 'course/:courseId/module/:moduleId/lesson/:lessonId/topic', component : CourseViewerComponent},
  {path : 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId/widget', component : CourseViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
