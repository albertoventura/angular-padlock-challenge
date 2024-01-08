import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';

import { FirstDoorComponent } from './first-door.component';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { ModalComponent } from 'src/app/shared/pages/modal/modal.component';


describe('FirstDoorComponent', () => {
  let component: FirstDoorComponent;
  let fixture: ComponentFixture<FirstDoorComponent>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;
  let localStorageSpy: jasmine.SpyObj<LocalstorageService>;

  beforeEach(() => {
    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    localStorageSpy = jasmine.createSpyObj('LocalstorageService', ['get', 'set']);

    TestBed.configureTestingModule({
      declarations: [FirstDoorComponent],
      providers: [
        { provide: MatDialog, useValue: dialogSpy },
        { provide: LocalstorageService, useValue: localStorageSpy }
      ],
    });

    fixture = TestBed.createComponent(FirstDoorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle lock', () => {
    const index = 0;

    component.toogleLock(index);

    expect(component.isEachSmallLockOpen[index]).toBe(true);
    expect(dialogSpy.open).not.toHaveBeenCalled();
  });

  it('should validate to open big lock', () => {
    spyOn(component, 'getState').and.returnValue([true, true, true]);

    component.validateToOpenBig();

    expect(component.isBigLockOpen).toBe(true);
    expect(dialogSpy.open).toHaveBeenCalledWith(ModalComponent, {
      data: { title: 'Primeira Porta', path: 'segunda-porta' }
    });
  });

  it('should not open big lock if all small locks are not open', () => {
    spyOn(component, 'getState').and.returnValue([true, false, true]);

    component.validateToOpenBig();

    expect(component.isBigLockOpen).toBe(false);
    expect(dialogSpy.open).not.toHaveBeenCalled();
  });

});
