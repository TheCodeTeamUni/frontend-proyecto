import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';

import { DatePipe } from '@angular/common';
import { AspirantInformationService } from 'src/app/services/aspirant-information.service';
import Swal from 'sweetalert2';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  public workInformationForm!: UntypedFormGroup;
  public url = 'applicantsList';
  public pipe = new DatePipe('en-US');
  public token!: any;
  public showEndDate!: any;
  public lstPositions!: any[];
  public works!: any[];


  constructor(
    private formBuilder: UntypedFormBuilder,
    private aspirantInformation: AspirantInformationService,
    private dataService: DataService,
  ) {}

  ngOnInit() {
    // Add applicants form validation
    this.workInformationForm = this.formBuilder.group({
      company: ['', [Validators.required]],
      position: ['Select Position', [Validators.required]],
      actualJob: ['Select', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['',],
    });

    this.token = localStorage.getItem('Token');
    this.loadPositions()
    this.getWorkInfo()
  }

  // Add applicants submit call
  addWorkInformation() {
    let startDate = this.pipe.transform(
      this.workInformationForm.value.startDate,
      'd/MM/y'
    );

    let endDate = this.pipe.transform(
      this.workInformationForm.value.endDate,
      'd/MM/y'
    );

    let actualJobValue =
      this.workInformationForm.value.actualJob === 'Yes' ? true : false;

    let workInformation = {
      company: this.workInformationForm.value.company,
      position: this.workInformationForm.value.position,
      actualJob: actualJobValue,
      startDate: startDate,
      endDate: endDate,
    };

    this.aspirantInformation
      .addWorkInfo(workInformation, this.token)
      .subscribe((data) => {
        this.typeSuccess();
        this.getWorkInfo()
      });
  }


  getWorkInfo() {
    this.aspirantInformation
      .getWorkInfo(this.token)
      .subscribe((data) => {
        this.works = data
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
      this.showEndDate = false;
    } else if (e == 'No') {
      this.showEndDate = true;
    }
  }

  loadPositions() {
    this.lstPositions = this.dataService.positions;
  }
}
