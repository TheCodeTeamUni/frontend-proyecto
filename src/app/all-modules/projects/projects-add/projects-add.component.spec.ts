/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ProjectsAddComponent } from './projects-add.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsService } from 'src/app/services/projects.service';
import { of } from 'rxjs';

describe('ProjectsAddComponent', () => {
  let component: ProjectsAddComponent;
  let fixture: ComponentFixture<ProjectsAddComponent>;
  let mockProjectService: ProjectsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsAddComponent],
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      providers: [ProjectsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsAddComponent);
    component = fixture.componentInstance;
    mockProjectService = TestBed.inject(ProjectsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with proper fields and validators', () => {
    // ... (rest of the test remains the same)
  });

  

  it('should get projects on initialization', fakeAsync(() => {
    const mockProjectsData = [{ id: 1, name: 'Project 1' }, { id: 2, name: 'Project 2' }];
    spyOn(mockProjectService, 'getProject').and.returnValue(of(mockProjectsData));

    component.ngOnInit();
    tick();

    expect(mockProjectService.getProject).toHaveBeenCalled();
    expect(component.lstProjects).toEqual(mockProjectsData);
  }));

  // Add more tests as needed for other functionalities
});
