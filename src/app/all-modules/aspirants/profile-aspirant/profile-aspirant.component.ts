import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AspirantsService } from 'src/app/services/aspirants.service';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { ProjectsService } from 'src/app/services/projects.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profile-aspirant',
  templateUrl: './profile-aspirant.component.html',
  styleUrls: ['./profile-aspirant.component.css'],
})
export class ProfileAspirantComponent implements OnInit {
  public userId!: string;
  public token!: any;

  //Personal information
  public name!: string;
  public lastName!: string;
  public typeDocument!: string;
  public document!: string;
  public gender!: string;
  public email!: string;
  public telephone!: string;
  public country!: string;
  public address!: string;
  public birthdate!: string;
  public description!: string;
  public photo!: string;
  imagenPorDefectoUrl: string = 'assets/img/profile-user.jpg';
  public addAspirantProjectForm!: UntypedFormGroup;
  public addInterviewForm!: UntypedFormGroup;
  public selectedProject!: string;
  public pipe = new DatePipe('en-US');

  //Lists

  public lstEducation!: any[];
  public lstWorks!: any[];
  public lstSkills!: any[];
  public lstPositions!: any[];
  public lstProjects!: any[];

  constructor(
    private route: ActivatedRoute,
    private aspirantService: AspirantsService,
    private formBuilder: UntypedFormBuilder,
    private dataService: DataService,
    private projectInfo: ProjectsService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.addAspirantProjectForm = this.formBuilder.group({
      project: ['Select...', [Validators.required]],
      rol: ['Select...', [Validators.required]],
      note: ['', [Validators.required]],
    });

    this.addInterviewForm = this.formBuilder.group({
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      note: ['', [Validators.required]],
    });

    this.token = localStorage.getItem('Token');
    this.userId = this.route.snapshot.paramMap.get('id')!;
    this.getAspirant();
    this.loadPositions();
    this.getProject();
  }

  getAspirant() {
    this.aspirantService
      .getAspirant(this.userId, this.token)
      .subscribe((data) => {
        this.name = data.personal_information.name;
        this.lastName = data.personal_information.lastName;
        this.typeDocument = data.personal_information.typeDocument;
        this.document = data.personal_information.document;
        this.gender = data.personal_information.gender;
        this.email = data.personal_information.alterntiveEmail;
        this.telephone = data.personal_information.telephone;
        this.country = data.personal_information.country;
        this.address = data.personal_information.address;
        this.birthdate = data.personal_information.birthdate;
        this.description = data.personal_information.description;
        this.photo = data.personal_information.photo;

        this.lstEducation = data.education;
        this.lstWorks = data.work_experience;
        this.lstSkills = data.skill;
      });
  }

  imagenNoEncontrada() {
    this.photo = this.imagenPorDefectoUrl;
  }

  getColorClass(level: number): string {
    if (level >= 80) {
      return 'bg-photoshop';
    } else if (level >= 50) {
      return 'bg-editor';
    } else if (level >= 30) {
      return 'bg-illustrator';
    } else {
      return 'bg-red';
    }
  }

  addAspirantProject() {
    let aspirantProject = {
      idUser: this.userId,
      name: this.name,
      lastName: this.lastName,
      role: this.addAspirantProjectForm.value.rol,
      notes: this.addAspirantProjectForm.value.note,
    };

    console.log(aspirantProject);

    this.projectInfo
      .addAspirantToProject(aspirantProject, this.token, this.selectedProject)
      .subscribe(
        (data) => {
          this.typeSuccess();
          this.router.navigate([
            '/layout/projects/projects-detail/' + this.selectedProject,
          ]);
        },
        (error) => {
          if (error instanceof HttpErrorResponse && error.status === 400) {
            const errorMessage = error.error.error; // Obtiene el mensaje de error del backend
            this.toastr.error(errorMessage, 'Error del backend');
          }
          // Aquí puedes manejar el error que proviene del backend

          // Puedes mostrar un mensaje de error al usuario
          // Por ejemplo, asignando el mensaje de error a una variable y mostrándolo en el frontend
          // this.errorMessage = 'Se produjo un error al asignar el aspirante al proyecto. Por favor, inténtelo de nuevo.';
          // O bien, mostrarlo en un modal, o cualquier otra lógica de manejo de errores
        }
      );
  }


  addInterview() {

    let date = this.pipe.transform(
      this.addInterviewForm.value.date,
      'd/MM/y'
    );

    let aspirantProject = {
      idUser:   this.userId,
      date:     date,
      time:     this.addInterviewForm.value.time,
      notes:    this.addInterviewForm.value.note,
    };

    console.log(aspirantProject);

  }

  loadPositions() {
    this.lstPositions = this.dataService.positions;
  }

  getProject() {
    this.projectInfo.getProject(this.token).subscribe((data) => {
      this.lstProjects = data;
    });
  }

  projectSelectionChange(event: any) {
    // Esta función se llamará cuando cambie la selección del skill
    const selectedProject = event.target.value;
    this.selectedProject = selectedProject;
    console.log(selectedProject);
    // Puedes almacenar selectedSkill en una variable de clase si lo necesitas para otras operaciones
  }

  typeSuccess() {
    Swal.fire({
      title: 'Success Record',
      text: 'Your data has been successfully saved in ABC JOBS!',
    });
  }
}
