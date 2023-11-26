import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { AspirantInformationService } from 'src/app/services/aspirant-information.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  public addSkillsForm!: UntypedFormGroup;
  public url = 'applicantsList';
  public pipe = new DatePipe('en-US');
  public lstSkills!: any[];
  public lstYears!: any[];
  public valorSeleccionado = 50;
  public token!: any;
  public skills!: any[];

  constructor(
    private formBuilder: UntypedFormBuilder,
    private dataService: DataService,
    private aspirantInformation: AspirantInformationService
  ) {}

  ngOnInit() {
    // Add applicants form validation
    this.addSkillsForm = this.formBuilder.group({
      skill: ['select...', [Validators.required]],
      level: ['', [Validators.required]],
      experience: ['Menos de 1 año de experiencia', [Validators.required]],
    });

    this.loadSkills();
    this.loadYears();
    this.token = localStorage.getItem('Token');
    this.getSkill()
  }

  // Add applicants submit call
  addSkill() {
    this.aspirantInformation
      .addSkill(this.addSkillsForm.value, this.token)
      .subscribe((data) => {
        this.typeSuccess();
        this.getSkill()
      });
  }


  getSkill() {
    this.aspirantInformation
      .getSkill(this.token)
      .subscribe((data) => {
        this.skills = data
      });
  }

  loadSkills() {
    this.lstSkills = this.dataService.skills;
  }

  loadYears() {
    this.lstYears = this.dataService.yearsOfExperience;
  }

  // Función para manejar el cambio de valor
  onSliderChange(event: any) {
    this.valorSeleccionado = event.value;
  }

  typeSuccess() {
    Swal.fire({
      title: 'Success Record',
      text: 'Your data has been successfully saved in ABC JOBS!',
    });
  }
}
