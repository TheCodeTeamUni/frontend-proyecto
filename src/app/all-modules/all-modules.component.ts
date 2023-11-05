import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-all-modules',
  templateUrl: './all-modules.component.html',
  styleUrls: ['./all-modules.component.css'],
})
export class AllModulesComponent implements OnInit {
  public navControllerAspirant: boolean = false; // Inicializar a false
  public navControllerCompany: boolean = false; // Inicializar a false
  token: any;

  constructor(public router: Router, private userService: UsersService) {}

  ngOnInit() {
    this.token = localStorage.getItem('Token');
    this.getUser();
  }

  getUser() {
    this.userService.getUser(this.token).subscribe(
      (res) => {
        if (res.type == '1') {
          this.navControllerAspirant = true;
          this.navControllerCompany = false;
        } else if (res.type == '2') {
          this.navControllerAspirant = false;
          this.navControllerCompany = true;
        }
      },
      (err) => {}
    );
  }
}
