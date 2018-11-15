import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseGridHeaderComponent } from './course-grid-header.component';

describe('CourseGridHeaderComponent', () => {
  let component: CourseGridHeaderComponent;
  let fixture: ComponentFixture<CourseGridHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseGridHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseGridHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
