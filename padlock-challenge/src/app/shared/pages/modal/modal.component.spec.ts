import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { ModalComponent, DialogData } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let localStorageSpy: jasmine.SpyObj<LocalstorageService>;
  let matDialogRefSpy: jasmine.SpyObj<MatDialogRef<ModalComponent>>;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    localStorageSpy = jasmine.createSpyObj('LocalstorageService', ['set']);
    matDialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    TestBed.configureTestingModule({
      declarations: [ModalComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: LocalstorageService, useValue: localStorageSpy },
        { provide: MatDialogRef, useValue: matDialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: { title: 'Test Title', path: 'test-path' } as DialogData }
      ],
    });

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should build data from dialog data', () => {
    const dialogData: DialogData = { title: 'Test Title', path: 'test-path' };
    component.buildData(dialogData);

    expect(component.title).toBe('Test Title');
    expect(component.path).toBe('test-path');
  });

  it('should close dialog, set localstorage, and navigate to next page', () => {
    component.goNext();

    expect(matDialogRefSpy.close).toHaveBeenCalled();
    expect(localStorageSpy.set).toHaveBeenCalledWith('currentPage', 'test-path');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['test-path']);
  });

});
