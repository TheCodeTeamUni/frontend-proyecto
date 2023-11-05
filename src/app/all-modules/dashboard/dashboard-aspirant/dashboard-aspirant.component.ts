import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard-aspirant',
  templateUrl: './dashboard-aspirant.component.html',
  styleUrls: ['./dashboard-aspirant.component.css'],
})
export class DashboardAspirantComponent implements OnInit {
  token!: any;
  username!: string;
  type!: string;
  profile!: string;

  constructor(public router: Router, private userService: UsersService) {}

  ngOnInit() {
    this.token = localStorage.getItem('Token');
    this.getAspirant();
  }

  getAspirant() {
    this.userService.getUser(this.token).subscribe(
      (res) => {
        this.username = res.username;
        this.type = res.type;

        if (res.type == '1') {
          this.profile = 'Aspirant';
        } else if (res.type == '2') {
          this.profile = 'Company';
        }
      },
      (err) => {}
    );
  }
}
