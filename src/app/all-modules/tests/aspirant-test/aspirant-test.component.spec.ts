/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AspirantTestComponent } from './aspirant-test.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AspirantTestComponent', () => {
  let component: AspirantTestComponent;
  let fixture: ComponentFixture<AspirantTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspirantTestComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspirantTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
