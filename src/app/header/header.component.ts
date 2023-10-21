import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UsersService } from "../services/users.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {

  token!: any;
  username!: string;
  type!: string;
  profile!: string;
  elem=document.documentElement
  
  constructor(public router: Router, private userService: UsersService) {}

  ngOnInit() {
  this.token = localStorage.getItem('Token');
  this.getUser();

  }

  Logout() {
    localStorage.removeItem("Token");
    localStorage.removeItem("Type");
    this.router.navigate(["/login"]);
  }

  fullscreen() {
    if(!document.fullscreenElement) {
      this.elem.requestFullscreen();
    }
    else {
      document.exitFullscreen();
    }
  }

  getUser() {
    this.userService.getUser(this.token).subscribe(
      (res) => {

        this.username = res.username;
        this.type = res.type;

        if (res.type=="1") {
          this.profile= "Aspirant";
        }else if (res.type=="2"){
          this.profile= "Company";
        }
      },
      (err) => {}
    );
  }



}
