import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphWidgetPreviewComponent } from './paragraph-widget-preview.component';

describe('ParagraphWidgetPreviewComponent', () => {
  let component: ParagraphWidgetPreviewComponent;
  let fixture: ComponentFixture<ParagraphWidgetPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParagraphWidgetPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphWidgetPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
