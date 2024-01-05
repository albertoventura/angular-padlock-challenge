import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatRoomComponent } from './cat-room.component';

describe('CatRoomComponent', () => {
  let component: CatRoomComponent;
  let fixture: ComponentFixture<CatRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
