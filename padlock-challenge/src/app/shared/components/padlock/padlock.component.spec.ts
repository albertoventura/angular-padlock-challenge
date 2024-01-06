import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadlockComponent } from './padlock.component';

describe('PadlockComponent', () => {
  let component: PadlockComponent;
  let fixture: ComponentFixture<PadlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
