import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-type',
  templateUrl: './register-type.component.html',
  styleUrls: ['./register-type.component.css']
})
export class RegisterTypeComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }


  aspirantRegister(){
    localStorage.setItem('type', "1");
    this.router.navigate(['/register']);
  }

  companyRegister(){
    localStorage.setItem('type', "2");
    this.router.navigate(['/register']);
  }



}
