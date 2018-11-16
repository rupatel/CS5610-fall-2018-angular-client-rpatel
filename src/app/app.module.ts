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
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleTabContentComponent } from './module-tab-content/module-tab-content.component';
import { ModuleComponent } from './module/module.component';
import { WidgetComponent } from './widget/widget.component';
import { HeaderWidgetPreviewComponent } from './header-widget-preview/header-widget-preview.component';
import { ParagraphWidgetPreviewComponent } from './paragraph-widget-preview/paragraph-widget-preview.component';
import { ListWidgetPreviewComponent } from './list-widget-preview/list-widget-preview.component';
import { ImageWidgetPreviewComponent } from './image-widget-preview/image-widget-preview.component';
import { LinkWidgetPreviewComponent } from './link-widget-preview/link-widget-preview.component';
import { TopicComponent } from './topic/topic.component';

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
    CourseGridHeaderComponent,
    CourseViewerComponent,
    ModuleTabContentComponent,
    ModuleComponent,
    WidgetComponent,
    HeaderWidgetPreviewComponent,
    ParagraphWidgetPreviewComponent,
    ListWidgetPreviewComponent,
    ImageWidgetPreviewComponent,
    LinkWidgetPreviewComponent,
    TopicComponent
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
