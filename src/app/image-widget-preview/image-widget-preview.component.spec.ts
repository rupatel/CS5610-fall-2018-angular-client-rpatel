import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWidgetPreviewComponent } from './image-widget-preview.component';

describe('ImageWidgetPreviewComponent', () => {
  let component: ImageWidgetPreviewComponent;
  let fixture: ComponentFixture<ImageWidgetPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageWidgetPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageWidgetPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
