import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { PadnumberComponent } from './padnumber.component';

describe('PadnumberComponent', () => {
  let component: PadnumberComponent;
  let fixture: ComponentFixture<PadnumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PadnumberComponent],
    });

    fixture = TestBed.createComponent(PadnumberComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit clicked event on click', fakeAsync(() => {
    spyOn(component.clicked, 'emit');

    component.onClick();
    tick(component.timeToChangeStatus + 1);

    expect(component.isClicked).toBe(false);
    expect(component.clicked.emit).toHaveBeenCalledWith(true);
  }));

  it('should reset isClicked after a delay', fakeAsync(() => {
    component.onClick();
    expect(component.isClicked).toBe(true);

    tick(component.timeToChangeStatus + 1);

    expect(component.isClicked).toBe(false);
  }));

});
