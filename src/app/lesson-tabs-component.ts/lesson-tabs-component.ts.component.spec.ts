import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTabsComponent.TsComponent } from './lesson-tabs-component.ts.component';

describe('LessonTabsComponent.TsComponent', () => {
  let component: LessonTabsComponent.TsComponent;
  let fixture: ComponentFixture<LessonTabsComponent.TsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonTabsComponent.TsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonTabsComponent.TsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
