import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { CatRoomComponent } from './cat-room.component';
import { routerLabels } from 'src/app/core/constants/router-labels';

describe('CatRoomComponent', () => {
  let component: CatRoomComponent;
  let fixture: ComponentFixture<CatRoomComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let localStorageSpy: jasmine.SpyObj<LocalstorageService>;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    localStorageSpy = jasmine.createSpyObj('LocalstorageService', ['clear']);

    TestBed.configureTestingModule({
      declarations: [CatRoomComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: LocalstorageService, useValue: localStorageSpy }
      ],
    });

    fixture = TestBed.createComponent(CatRoomComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset challenge and navigate to first door', () => {
    component.resetChallenge();

    expect(routerSpy.navigate).toHaveBeenCalledWith([routerLabels.firstDoor]);
    expect(localStorageSpy.clear).toHaveBeenCalled();
  });


});
