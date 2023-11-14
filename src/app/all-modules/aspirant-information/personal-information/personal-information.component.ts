import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';
import { AspirantInformationService } from 'src/app/services/aspirant-information.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  public personalInformationForm!: UntypedFormGroup;
  public url = 'applicantsList';
  public pipe = new DatePipe('en-US');
  public lstCountries!: any[];
  public token!: any;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private dataService: DataService,
    private aspirantInformation: AspirantInformationService
  ) {}

  ngOnInit() {
    // Add applicants form validation
    this.personalInformationForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      typeDocument: ['Select...', [Validators.required]],
      document: ['', [Validators.required]],
      gender: ['Select...', [Validators.required]],
      birthdate: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      alterntiveEmail: ['', [Validators.email]],
      country: ['', [Validators.required]],
      description: ['', [Validators.required]],
      photo: [''],
    });
    this.loadCountries();
    this.token = localStorage.getItem('Token');
  }

  // Add applicants submit call
  addPersonalInformation() {
    let DateJoin = this.pipe.transform(
      this.personalInformationForm.value.birthdate,
      'd/MM/y'
    );

    let personalInformation = {
      name: this.personalInformationForm.value.name,
      lastName: this.personalInformationForm.value.lastName,
      typeDocument: this.personalInformationForm.value.typeDocument,
      document: this.personalInformationForm.value.document,
      gender: this.personalInformationForm.value.gender,
      birthdate: DateJoin,
      telephone: this.personalInformationForm.value.telephone,
      address: this.personalInformationForm.value.address,
      alterntiveEmail: this.personalInformationForm.value.alterntiveEmail,
      country: this.personalInformationForm.value.country,
      description: this.personalInformationForm.value.description,
      photo: this.personalInformationForm.value.photo,
    };

    this.aspirantInformation
      .addPersonalInfo(personalInformation, this.token)
      .subscribe((data) => {
        this.typeSuccess();
      });
  }

  loadCountries() {
    this.lstCountries = this.dataService.countries;
  }

  typeSuccess() {
    Swal.fire({
      title: 'Success Record',
      text: 'Your data has been successfully saved in ABC JOBS!',
    });
  }
}
