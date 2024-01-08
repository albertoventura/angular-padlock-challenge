import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { AppComponent } from './app.component';
import { LocalstorageService } from './core/services/localstorage.service';
import { routerLabels } from './core/constants/router-labels';
import { Router } from '@angular/router';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let localstorageService: LocalstorageService;
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule],
      providers: [LocalstorageService],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    localstorageService = TestBed.inject(LocalstorageService);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to first door when currentPage is not set', () => {
    spyOn(location, 'path').and.returnValue('');
    spyOn(component, 'getCurrentPage').and.returnValue(null);
    spyOn(router, 'navigate');

    component.checkPageOrder();

    expect(router.navigate).toHaveBeenCalledWith([routerLabels.firstDoor]);
  });

  it('should navigate to first door and clear localStorage when currentPage is set and not first door', () => {
    spyOn(location, 'path').and.returnValue('/second-door');
    spyOn(component, 'getCurrentPage').and.returnValue(routerLabels.secondDoor);
    spyOn(router, 'navigate');
    spyOn(localstorageService, 'clear');

    component.checkPageOrder();

    expect(localstorageService.clear).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith([routerLabels.firstDoor]);
  });

  it('should navigate to currentPage when currentPage is set and valid', () => {
    spyOn(location, 'path').and.returnValue('/second-door');
    spyOn(component, 'getCurrentPage').and.returnValue(routerLabels.secondDoor);
    spyOn(router, 'navigate');

    component.checkPageOrder();

    expect(router.navigate).toHaveBeenCalledWith([routerLabels.secondDoor]);
  });
});
