import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AspirantsService } from 'src/app/services/aspirants.service';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { ProjectsService } from 'src/app/services/projects.service';

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
    private projectInfo: ProjectsService
  ) {}

  ngOnInit() {
    this.addAspirantProjectForm = this.formBuilder.group({
      project: ['Select...', [Validators.required]],
      rol: ['Select...', [Validators.required]],
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
      userId: this.userId,
      project: this.addAspirantProjectForm.value.project,
      rol: this.addAspirantProjectForm.value.rol,
      note: this.addAspirantProjectForm.value.note,
    };

    console.log('Formulario enviado:', aspirantProject);
  }

  loadPositions() {
    this.lstPositions = this.dataService.positions;
  }

  getProject() {
    this.projectInfo.getProject(this.token).subscribe((data) => {
      this.lstProjects = data;
    });
  }
}
