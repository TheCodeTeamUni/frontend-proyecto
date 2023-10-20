import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardAspirantComponent } from './dashboard-aspirant.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';

describe('DashboardMainComponent', () => {
  let component: DashboardAspirantComponent;
  let fixture: ComponentFixture<DashboardAspirantComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAspirantComponent],
      imports: [ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAspirantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
