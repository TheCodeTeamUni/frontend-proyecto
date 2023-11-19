/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AspirantsInterviewsComponent } from './aspirants-interviews.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AspirantsInterviewsComponent', () => {
  let component: AspirantsInterviewsComponent;
  let fixture: ComponentFixture<AspirantsInterviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspirantsInterviewsComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspirantsInterviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
