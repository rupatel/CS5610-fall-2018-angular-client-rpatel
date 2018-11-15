import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicPillsComponentComponent } from './topic-pills-component/topic-pills-component.component';
import { WidgetListComponentComponent } from './widget-list-component/widget-list-component.component';
import { CourseGridComponentComponent } from './course-grid-component/course-grid-component.component';
import { ModuleListComponentComponent } from './module-list-component/module-list-component.component';
import { LessonTabsComponentComponent } from './lesson-tabs-component/lesson-tabs-component.component';
import {CourseServiceClient} from './services/CourseServiceClient';
import {LessonServiceClient} from './services/LessonServiceClient';
import {ModuleServiceClient} from './services/ModuleServiceClient';
import {TopicServiceClient} from './services/TopicServiceClient';
import {WidgetServiceClient} from './services/WidgetServiceClient';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseTableNavBarComponent } from './course-table-nav-bar/course-table-nav-bar.component';
import { CourseGridHeaderComponent } from './course-grid-header/course-grid-header.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicPillsComponentComponent,
    WidgetListComponentComponent,
    CourseGridComponentComponent,
    ModuleListComponentComponent,
    LessonTabsComponentComponent,
    CourseCardComponent,
    CourseTableNavBarComponent,
    CourseGridHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CourseServiceClient,
    LessonServiceClient,
    ModuleServiceClient,
    TopicServiceClient,
    WidgetServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
