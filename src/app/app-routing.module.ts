import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseGridComponentComponent} from './course-grid-component/course-grid-component.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';

const routes: Routes = [
  {path : '', component : CourseGridComponentComponent},
  {path : 'course/:courseId/view', component : CourseViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
