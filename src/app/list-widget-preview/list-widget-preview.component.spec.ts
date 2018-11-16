import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWidgetPreviewComponent } from './list-widget-preview.component';

describe('ListWidgetPreviewComponent', () => {
  let component: ListWidgetPreviewComponent;
  let fixture: ComponentFixture<ListWidgetPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWidgetPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWidgetPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
