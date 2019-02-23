import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfforttrackerComponent } from './efforttracker.component';

describe('EfforttrackerComponent', () => {
  let component: EfforttrackerComponent;
  let fixture: ComponentFixture<EfforttrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfforttrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EfforttrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
