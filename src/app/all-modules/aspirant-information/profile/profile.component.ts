import { Component, OnInit } from '@angular/core';
import { AspirantInformationService } from 'src/app/services/aspirant-information.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public token!: any;
  public photo!: any;
  public address!: string;
  public alterntiveEmail!: string;
  public country!: string;
  public description!: string;
  public document!: string;
  public gender!: string;
  public lastName!: string;
  public name!: string;
  public telephone!: string;
  public typeDocument!: string;
  public birthdate!: string;
  public skills!: any[];
  public imagenPorDefectoUrl: string = 'assets/img/profiles/avatar-02.jpg';

  constructor(private aspirantInformation: AspirantInformationService) {}

  ngOnInit() {
    this.token = localStorage.getItem('Token');
    this.getPersonalInfo();
    this.getSkill();
  }

  getPersonalInfo() {
    this.aspirantInformation.getPersonalInfo(this.token).subscribe((data) => {
      this.photo = data.photo;
      this.birthdate = data.birthdate;
      this.address = data.address;
      this.alterntiveEmail = data.alterntiveEmail;
      this.country = data.country;
      this.description = data.description;
      this.document = data.document;
      this.gender = data.gender;
      this.lastName = data.lastName;
      this.name = data.name;
      this.telephone = data.telephone;
      this.typeDocument = data.typeDocument;
    });
  }

  getSkill() {
    this.aspirantInformation.getSkill(this.token).subscribe((data) => {
      this.skills = data;
    });
  }

  imagenNoEncontrada() {
    this.photo = this.imagenPorDefectoUrl;
  }
}
