import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetListComponent.TsComponent } from './widget-list-component.ts.component';

describe('WidgetListComponent.TsComponent', () => {
  let component: WidgetListComponent.TsComponent;
  let fixture: ComponentFixture<WidgetListComponent.TsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetListComponent.TsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetListComponent.TsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
