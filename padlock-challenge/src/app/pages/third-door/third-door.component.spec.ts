import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { ModalComponent } from 'src/app/shared/pages/modal/modal.component';
import { ThirdDoorComponent } from './third-door.component';

describe('ThirdDoorComponent', () => {
  let component: ThirdDoorComponent;
  let fixture: ComponentFixture<ThirdDoorComponent>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;
  let localStorageSpy: jasmine.SpyObj<LocalstorageService>;

  beforeEach(() => {
    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    localStorageSpy = jasmine.createSpyObj('LocalstorageService', ['get', 'set']);

    TestBed.configureTestingModule({
      declarations: [ThirdDoorComponent],
      providers: [
        { provide: MatDialog, useValue: dialogSpy },
        { provide: LocalstorageService, useValue: localStorageSpy }
      ],
    });

    fixture = TestBed.createComponent(ThirdDoorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should tap number and validate rule', () => {
    spyOn(component, 'checkPassword').and.returnValue(true);

    component.tapNumber(1);

    expect(component.tappedPassword).toEqual(['1']);
    expect(component.isBigLockOpen).toBe(true);
    expect(dialogSpy.open).toHaveBeenCalledWith(ModalComponent, {
      data: { title: 'Terceira Porta', path: 'cat-room' }
    });
  });

  it('should tap number and not open big lock if password is incorrect', () => {
    spyOn(component, 'checkPassword').and.returnValue(false);

    component.tapNumber(2);

    expect(component.tappedPassword).toEqual(['2']);
    expect(component.isBigLockOpen).toBe(false);
    expect(dialogSpy.open).not.toHaveBeenCalled();
  });

  it('should save and get state', () => {
    const state = ['1', '2', '3'];
    component.saveState(state);

    expect(localStorageSpy.set).toHaveBeenCalledWith(component.pageKey, state);

    spyOn(localStorageSpy, 'get').and.returnValue(state);
    const retrievedState = component.getState();

    expect(retrievedState).toEqual(state);
    expect(localStorageSpy.get).toHaveBeenCalledWith(component.pageKey);
  });

  it('should check state and validate rule', () => {
    spyOn(component, 'checkPassword').and.returnValue(true);
    spyOn(component, 'getState').and.returnValue(['2', '8', '0', '9', '1', '9', '9', '8']);

    component.checkState();

    expect(component.tappedPassword).toEqual(['2', '8', '0', '9', '1', '9', '9', '8']);
    expect(component.isBigLockOpen).toBe(true);
    expect(dialogSpy.open).toHaveBeenCalledWith(ModalComponent, {
      data: { title: 'Terceira Porta', path: 'cat-room' }
    });
  });


});
