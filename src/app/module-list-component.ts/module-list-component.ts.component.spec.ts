import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleListComponent.TsComponent } from './module-list-component.ts.component';

describe('ModuleListComponent.TsComponent', () => {
  let component: ModuleListComponent.TsComponent;
  let fixture: ComponentFixture<ModuleListComponent.TsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleListComponent.TsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleListComponent.TsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
