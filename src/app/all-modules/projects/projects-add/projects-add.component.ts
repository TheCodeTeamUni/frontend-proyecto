import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects-add',
  templateUrl: './projects-add.component.html',
  styleUrls: ['./projects-add.component.css']
})
export class ProjectsAddComponent implements OnInit {

  public projectsAddForm!: UntypedFormGroup;
  public pipe = new DatePipe('en-US');
  public token!: any;
  public lstProjects!: any[];

  constructor(
    private formBuilder: UntypedFormBuilder,
    private projectInfo: ProjectsService
  ) { }

  ngOnInit() {
    this.projectsAddForm = this.formBuilder.group({
      nameProject: ['', [Validators.required]],
      description: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      aspirants: ['',],
    });
    this.token = localStorage.getItem('Token');
    this.getProject()
  }


  addProject() {
    let startDate = this.pipe.transform(
      this.projectsAddForm.value.startDate,
      'd/MM/y'
    );

    let endDate = this.pipe.transform(
      this.projectsAddForm.value.endDate,
      'd/MM/y'
    );



    let projectInfo = {
      nameProject: this.projectsAddForm.value.nameProject,
      description: this.projectsAddForm.value.description,
      startDate: startDate,
      endDate: endDate,
      aspirants: this.projectsAddForm.value.aspirants,
    };

    this.projectInfo
      .addProject(projectInfo, this.token)
      .subscribe((data) => {
        this.typeSuccess();
        this.getProject();
      });
  }

  getProject() {
    this.projectInfo.getProject(this.token).subscribe((data) => {
      this.lstProjects = data;
    });
  }


  typeSuccess() {
    Swal.fire({
      title: 'Success Record',
      text: 'Your data has been successfully saved in ABC JOBS!',
    });
  }

}
