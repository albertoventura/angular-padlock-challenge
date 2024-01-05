import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDoorComponent } from './first-door.component';

describe('FirstDoorComponent', () => {
  let component: FirstDoorComponent;
  let fixture: ComponentFixture<FirstDoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstDoorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
