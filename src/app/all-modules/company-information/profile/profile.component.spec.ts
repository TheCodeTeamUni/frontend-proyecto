/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set default photo when image not found', () => {
    const defaultImageUrl = 'assets/img/profiles/avatar-02.jpg';

    // Set photo to a different value
    component.photo = 'some-other-image.jpg';
    // Call the method to simulate the image not being found
    component.imagenNoEncontrada();

    // Assert that photo should be updated to the default image URL
    expect(component.photo).toBe(defaultImageUrl);
  });

  // Add more tests as needed for other functionalities or edge cases
});
