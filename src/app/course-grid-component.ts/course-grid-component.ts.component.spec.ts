import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseGridComponent.TsComponent } from './course-grid-component.ts.component';

describe('CourseGridComponent.TsComponent', () => {
  let component: CourseGridComponent.TsComponent;
  let fixture: ComponentFixture<CourseGridComponent.TsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseGridComponent.TsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseGridComponent.TsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
