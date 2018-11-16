import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkWidgetPreviewComponent } from './link-widget-preview.component';

describe('LinkWidgetPreviewComponent', () => {
  let component: LinkWidgetPreviewComponent;
  let fixture: ComponentFixture<LinkWidgetPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkWidgetPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkWidgetPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
