import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardAspirantComponent } from './dashboard-aspirant.component';

describe('DashboardMainComponent', () => {
  let component: DashboardAspirantComponent;
  let fixture: ComponentFixture<DashboardAspirantComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAspirantComponent]
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
