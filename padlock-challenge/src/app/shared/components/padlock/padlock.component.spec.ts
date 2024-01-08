import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PadlockComponent } from './padlock.component';

describe('PadlockComponent', () => {
  let component: PadlockComponent;
  let fixture: ComponentFixture<PadlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PadlockComponent],
    });

    fixture = TestBed.createComponent(PadlockComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values for isOpen, isBig, and isInteractive', () => {
    expect(component.isOpen).toBe(false);
    expect(component.isBig).toBe(false);
    expect(component.isInteractive).toBe(true);
  });

  it('should set isOpen, isBig, and isInteractive based on input values', () => {
    component.isOpen = true;
    component.isBig = true;
    component.isInteractive = false;

    fixture.detectChanges();

    const padlockElement: HTMLElement = fixture.nativeElement;
    const isOpenAttribute = padlockElement.getAttribute('data-is-open');
    const isBigAttribute = padlockElement.getAttribute('data-is-big');
    const isInteractiveAttribute = padlockElement.getAttribute('data-is-interactive');

    expect(isOpenAttribute).toBe('true');
    expect(isBigAttribute).toBe('true');
    expect(isInteractiveAttribute).toBe('false');
  });


});
