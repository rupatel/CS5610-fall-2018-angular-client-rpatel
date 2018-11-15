import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTableNavBarComponent } from './course-table-nav-bar.component';

describe('CourseTableNavBarComponent', () => {
  let component: CourseTableNavBarComponent;
  let fixture: ComponentFixture<CourseTableNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseTableNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTableNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
