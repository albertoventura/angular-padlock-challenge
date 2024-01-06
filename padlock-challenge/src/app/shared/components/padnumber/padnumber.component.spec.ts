import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadnumberComponent } from './padnumber.component';

describe('PadnumberComponent', () => {
  let component: PadnumberComponent;
  let fixture: ComponentFixture<PadnumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadnumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
