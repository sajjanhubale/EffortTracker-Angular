import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeffortsComponent } from './addefforts.component';

describe('AddeffortsComponent', () => {
  let component: AddeffortsComponent;
  let fixture: ComponentFixture<AddeffortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeffortsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeffortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
