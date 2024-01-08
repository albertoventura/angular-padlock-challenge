import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { ModalComponent } from 'src/app/shared/pages/modal/modal.component';
import { SecondDoorComponent } from './second-door.component';

describe('SecondDoorComponent', () => {
  let component: SecondDoorComponent;
  let fixture: ComponentFixture<SecondDoorComponent>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;
  let localStorageSpy: jasmine.SpyObj<LocalstorageService>;

  beforeEach(() => {
    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    localStorageSpy = jasmine.createSpyObj('LocalstorageService', ['get', 'set']);

    TestBed.configureTestingModule({
      declarations: [SecondDoorComponent],
      providers: [
        { provide: MatDialog, useValue: dialogSpy },
        { provide: LocalstorageService, useValue: localStorageSpy }
      ],
    });

    fixture = TestBed.createComponent(SecondDoorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle lock', () => {
    const index = 0;

    component.toogleLock(index);

    expect(component.isEachLockOpen[index]).toBe(true);
    expect(dialogSpy.open).not.toHaveBeenCalled();
  });

  it('should validate combination and go to next door', () => {
    spyOn(component, 'getState').and.returnValue([true, true, true, true, true]);

    component.validateCombination();

    expect(dialogSpy.open).toHaveBeenCalledWith(ModalComponent, {
      data: { title: 'Secunda Porta', path: 'terceira-porta' }
    });
  });

  it('should not go to next door if the combination is not valid', () => {
    spyOn(component, 'getState').and.returnValue([true, false, true, true, true]);

    component.validateCombination();

    expect(dialogSpy.open).not.toHaveBeenCalled();
  });

  it('should save and get state', () => {
    const state = [true, false, true, true, true];
    component.saveState(state);

    expect(localStorageSpy.set).toHaveBeenCalledWith(component.pageKey, state);

    spyOn(localStorageSpy, 'get').and.returnValue(state);
    const retrievedState = component.getState();

    expect(retrievedState).toEqual(state);
    expect(localStorageSpy.get).toHaveBeenCalledWith(component.pageKey);
  });

  it('should check state and validate combination', () => {
    spyOn(component, 'getState').and.returnValue([true, true, true, true, true]);

    component.checkState();

    expect(component.isEachLockOpen).toEqual([true, true, true, true, true]);
    expect(dialogSpy.open).toHaveBeenCalledWith(ModalComponent, {
      data: { title: 'Secunda Porta', path: 'terceira-porta' }
    });
  });


});
