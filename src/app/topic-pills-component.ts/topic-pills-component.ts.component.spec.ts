import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPillsComponent.TsComponent } from './topic-pills-component.ts.component';

describe('TopicPillsComponent.TsComponent', () => {
  let component: TopicPillsComponent.TsComponent;
  let fixture: ComponentFixture<TopicPillsComponent.TsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicPillsComponent.TsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicPillsComponent.TsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
