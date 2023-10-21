import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllModulesComponent } from './all-modules.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

describe('AllModulesComponent', () => {
  let component: AllModulesComponent;
  let fixture: ComponentFixture<AllModulesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllModulesComponent ],
      imports: [ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
