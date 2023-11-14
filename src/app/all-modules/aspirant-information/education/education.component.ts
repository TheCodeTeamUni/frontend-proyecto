import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { AspirantInformationService } from 'src/app/services/aspirant-information.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  public educationForm!: UntypedFormGroup;
  public url = 'applicantsList';
  public pipe = new DatePipe('en-US');
  public token!: any;
  public showEndDate!: any;
  public educations!: any[];
  constructor(
    private formBuilder: UntypedFormBuilder,
    private aspirantInformation: AspirantInformationService
  ) {}

  ngOnInit() {
    // Add applicants form validation
    this.educationForm = this.formBuilder.group({
      typeEducation: ['Select...', [Validators.required]],
      level: ['Select...', [Validators.required]],
      title: ['', [Validators.required]],
      grade: ['Select...', [Validators.required]],
      institution: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: [''],
    });

    this.token = localStorage.getItem('Token');
    this.getEducationInformation();
  }

  // Add education submit call

  addEducationInformation() {
    let startDate = this.pipe.transform(
      this.educationForm.value.startDate,
      'd/MM/y'
    );

    let endDate = this.pipe.transform(
      this.educationForm.value.endDate,
      'd/MM/y'
    );

    let gradeValue = this.educationForm.value.grade === 'Yes' ? true : false;

    let eduInformation = {
      typeEducation: this.educationForm.value.typeEducation,
      level: this.educationForm.value.level,
      title: this.educationForm.value.title,
      grade: gradeValue,
      institution: this.educationForm.value.institution,
      startDate: startDate,
      endDate: endDate,
    };

    this.aspirantInformation
      .addEducation(eduInformation, this.token)
      .subscribe((data) => {
        this.typeSuccess();
        this.getEducationInformation();
      });
  }

  getEducationInformation() {
    this.aspirantInformation.getEducation(this.token).subscribe((data) => {
      this.educations = data;
    });
  }

  typeSuccess() {
    Swal.fire({
      title: 'Success Record',
      text: 'Your data has been successfully saved in ABC JOBS!',
    });
  }

  endDateChange(e: any) {
    if (e == 'Yes') {
      this.showEndDate = true;
    } else if (e == 'No') {
      this.showEndDate = false;
    }
  }
}
