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
import { AspirantsService } from 'src/app/services/aspirants.service';
import { TestsService } from 'src/app/services/tests.service';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css'],
})
export class AddTestComponent implements OnInit {
  public addTestForm!: UntypedFormGroup;
  public companyTests!: any[];
  public lstaspirants!: any[];
  public pipe = new DatePipe('en-US');
  public token!: any;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private aspirantsService: AspirantsService,
    private testService: TestsService
  ) {}

  ngOnInit() {
    this.addTestForm = this.formBuilder.group({
      idAspirant: ['Select...', [Validators.required]],
      nameTest: ['', [Validators.required]],
      date: ['', [Validators.required]],
      result: ['Select...', [Validators.required]],
      notes: [''],
    });

    this.token = localStorage.getItem('Token');
    this.getAllAspirants();
    this.getCompanyTests()
  }


  obtenerHoraActual(): string {
    const horaActual = new Date();
    const horas = horaActual.getHours().toString().padStart(2, '0'); // Asegura dos dígitos en las horas
    const minutos = horaActual.getMinutes().toString().padStart(2, '0'); // Asegura dos dígitos en los minutos
    return `${horas}:${minutos}`;
  }

  addTest() {
    let date = this.pipe.transform(
      this.addTestForm.value.date,
      'd/MM/y'
    );

  const horaActual = new Date();

    let  test = {
    idAspirant: this.addTestForm.value.idAspirant,
    nameTest:   this.addTestForm.value.nameTest,
    date: date + ' ' + this.obtenerHoraActual(),
    result: this.addTestForm.value.result,
    notes:  this.addTestForm.value.notes
    }

    console.log(test)

    this.testService
    .addTest(test, this.token)
    .subscribe((data) => {
      this.typeSuccess();
      this.getCompanyTests()
    });


  }

  getAllAspirants() {
    this.aspirantsService.getAllAspirants(this.token).subscribe((data) => {
      this.lstaspirants = data;
    });
  }

  getCompanyTests() {

    this.testService.getCompanyTest(this.token).subscribe((data) => {
      this.companyTests = data;
    });
  }



  typeSuccess() {
    Swal.fire({
      title: 'Success Record',
      text: 'Your data has been successfully saved in ABC JOBS!',
    });
  }
}
