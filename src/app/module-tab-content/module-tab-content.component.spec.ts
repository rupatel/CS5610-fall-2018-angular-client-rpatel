import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTabContentComponent } from './module-tab-content.component';

describe('ModuleTabContentComponent', () => {
  let component: ModuleTabContentComponent;
  let fixture: ComponentFixture<ModuleTabContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleTabContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTabContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
