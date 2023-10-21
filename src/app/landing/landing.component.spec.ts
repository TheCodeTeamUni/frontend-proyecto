import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingComponent } from './landing.component';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingComponent],
      providers: [Router], // Puedes configurar un RouterTestingModule si lo prefieres.
    });

    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to "/register-type" when joinow is called', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.joinow();
    expect(navigateSpy).toHaveBeenCalledWith(['/register-type']);
  });

  it('should have a button with the text "Join Now"', () => {
    fixture.detectChanges(); // Actualizar la vista
    const joinNowButton = fixture.debugElement.query(By.css('a'));
    expect(joinNowButton.nativeElement.textContent).toContain('Join Now');
  });
});
