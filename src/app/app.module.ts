import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseGridComponent } from './course-grid-component.ts/course-grid-component.ts.component';
import { ModuleListComponent } from './module-list-component.ts/module-list-component.ts.component';
import { LessonTabsComponent } from './lesson-tabs-component.ts/lesson-tabs-component.ts.component';
import { TopicPillsComponent } from './topic-pills-component.ts/topic-pills-component.ts.component';
import { WidgetListComponent } from './widget-list-component.ts/widget-list-component.ts.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponent.TsComponent,
    ModuleListComponent.TsComponent,
    LessonTabsComponent.TsComponent,
    TopicPillsComponent.TsComponent,
    WidgetListComponent.TsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
