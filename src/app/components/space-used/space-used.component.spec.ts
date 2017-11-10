import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceUsedComponent } from './space-used.component';

describe('SpaceUsedComponent', () => {
  let component: SpaceUsedComponent;
  let fixture: ComponentFixture<SpaceUsedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceUsedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
