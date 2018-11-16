import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWidgetPreviewComponent } from './header-widget-preview.component';

describe('HeaderWidgetPreviewComponent', () => {
  let component: HeaderWidgetPreviewComponent;
  let fixture: ComponentFixture<HeaderWidgetPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderWidgetPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWidgetPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
