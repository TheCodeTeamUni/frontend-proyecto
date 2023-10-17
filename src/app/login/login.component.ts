import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public Toggledata = true;
  public CustomControler: any;
  form = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required]),
    password: new UntypedFormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  ngOnInit() {
    localStorage.removeItem('Type');
  }

  submit() {
    this.loginService.login(this.form.value).subscribe(
      (res) => {
        if (res.token !== undefined) {
          this.showSuccess()
          this.router.navigate(['/layout/dashboard/dashboard-aspirant']);
          localStorage.setItem("Token", res.token);
        } else {
          this.showError()
        }
      },
      (error) => {
           this.showError()
      }
    );
  }

  ngOnDestroy() {}

  iconLogle() {
    this.Toggledata = !this.Toggledata;
  }

  showSuccess() {
    this.toastr.success(`Welcome to ABC Jobs`, 'Login Success');
  }

  showError() {
    this.toastr.error(`Email or password incorrect`, 'Failed to login');
  }
}
