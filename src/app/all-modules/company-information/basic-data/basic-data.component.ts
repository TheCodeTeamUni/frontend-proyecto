import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { startOfDay, endOfDay } from 'date-fns';
import { MonthViewDay } from 'calendar-utils';
import { es } from 'date-fns/locale';  // Importa el locale español
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';



@Component({
  selector: 'app-basic-data',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './basic-data.component.html',
  styleUrls: ['./basic-data.component.css'],
})
export class BasicDataComponent implements OnInit {

  public companyInformationForm!: UntypedFormGroup;
  public lstCountries!: any[];

  constructor(  private formBuilder: UntypedFormBuilder,) {
  }

  ngOnInit() {

    this.companyInformationForm = this.formBuilder.group({
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
  }

  addCompanyformation(){}

}
