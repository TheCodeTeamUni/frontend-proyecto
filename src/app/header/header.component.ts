import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { AspirantInformationService } from '../services/aspirant-information.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  token!: any;
  username!: string;
  type!: string;
  profile!: string;
  elem = document.documentElement;
  photo!: string;
  lastName!: string;
  name!: string;
  imagenPorDefectoUrl: string = 'assets/img/profiles/avatar-02.jpg';
  profileRoute!: string;

  constructor(
    public router: Router,
    private userService: UsersService,
    private aspirantInformation: AspirantInformationService
  ) {}

  ngOnInit() {
    this.token = localStorage.getItem('Token');
    this.getUser();
    this.getInfo();
  }

  Logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('Type');
    this.router.navigate(['/login']);
  }

  fullscreen() {
    if (!document.fullscreenElement) {
      this.elem.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  getUser() {
    this.userService.getUser(this.token).subscribe(
      (res) => {
        this.username = res.username;
        this.type = res.type;

        if (res.type == '1') {
          this.profile = 'Aspirant';
          this.profileRoute = "/layout/aspirant-information/profile"
        } else if (res.type == '2') {
          this.profile = 'Company';
          this.profileRoute = "/layout/company-information/profile"
        }
      },
      (err) => {}
    );
  }

  getInfo() {
    if(this.profile = 'Aspirant'){
      this.aspirantInformation.getPersonalInfo(this.token).subscribe((data) => {
      this.photo = data.photo;
      this.lastName = data.lastName;
      this.name = data.name;

    })} else if (this.profile = 'Company'){





    }
  }

  imagenNoEncontrada() {
    this.photo = this.imagenPorDefectoUrl;
  }
}
