import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-projects-add',
  templateUrl: './projects-add.component.html',
  styleUrls: ['./projects-add.component.css']
})
export class ProjectsAddComponent implements OnInit {

  public projectsAddForm!: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
  ) { }

  ngOnInit() {
    this.projectsAddForm = this.formBuilder.group({
      projectName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      aspirantsNumber: ['',],
    });
  }


  addProject(){
    console.log(this.projectsAddForm.value)

  }

}
