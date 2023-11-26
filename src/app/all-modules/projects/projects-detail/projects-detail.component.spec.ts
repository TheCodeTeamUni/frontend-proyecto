/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ProjectsDetailComponent } from './projects-detail.component';
import { ProjectsService } from 'src/app/services/projects.service';

describe('ProjectsDetailComponent', () => {
  let component: ProjectsDetailComponent;
  let fixture: ComponentFixture<ProjectsDetailComponent>;

  const activatedRouteMock = {
    snapshot: {
      paramMap: {
        get: () => '123', // Simula un valor de ID
      },
    },
  };

  const projectsServiceMock = {
    getAspirantProject: () => {
      return of({
        aspirants: [
          // Define aquí tu lista simulada de aspirantes
          { name: 'Aspirant 1' },
          { name: 'Aspirant 2' },
        ],
        project: {
          nameProject: 'Project Name',
          startDate: '2023-01-01',
          endDate: '2023-12-31',
          aspirants: 'Some aspirants',
          description: 'Project description',
        },
      });
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: ProjectsService, useValue: projectsServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería obtener detalles del proyecto al inicializarse', () => {
    component.ngOnInit();

    expect(component.projectId).toBe('123');
    expect(component.lstAspirants.length).toBe(2); // Cambia según tu lista simulada de aspirantes
    expect(component.nameProject).toBe('Project Name');
    expect(component.startDate).toBe('2023-01-01');
    expect(component.endDate).toBe('2023-12-31');
    expect(component.aspirants).toBe('Some aspirants');
    expect(component.description).toBe('Project description');
  });
});

