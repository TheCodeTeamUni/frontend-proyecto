import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/localStorage.service';

@Component({
  selector: 'app-register-type',
  templateUrl: './register-type.component.html',
  styleUrls: ['./register-type.component.css'],
})
export class RegisterTypeComponent implements OnInit {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {}

  aspirantRegister() {
    this.localStorageService.setItem('Type', '1');
    this.router.navigate(['/register']);
  }

  companyRegister() {
    this.localStorageService.setItem('Type', '2');
    this.router.navigate(['/register']);
  }
}
