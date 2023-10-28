import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public isvalidconfirmpassword: boolean = false;

  public CustomControler: any;
  public Toggledata = true;
  public register: any;
  public typename!: any;
  public titleRegister!: string;
  public inputName!: string;

  form = new UntypedFormGroup({
    username: new UntypedFormControl('', [Validators.required]),
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', [Validators.required]),
    confirmPassword: new UntypedFormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(
    private registerService: RegisterService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.typename = localStorage.getItem('Type');
    this.type();
  }

  submit() {
    this.register = {
      username: this.form.value.username,
      email: this.form.value.email,
      password: this.form.value.password,
      type: localStorage.getItem('Type'),
    };

    console.log(this.register);
    if (this.form.value.password != this.form.value.confirmPassword) {
      this.showError();
    } else if (this.form.value.password.length < 10) {
      this.showErrorLength();
    } else {
      this.isvalidconfirmpassword = false;
      this.registerService.register(this.register).subscribe((data) => {});
      this.showSuccess();
      this.router.navigate(['/login']);
      localStorage.removeItem('Type');
    }
  }

  ngOnDestroy() {}
  iconLogle() {
    this.Toggledata = !this.Toggledata;
  }

  type() {
    if (this.typename == '1') {
      this.titleRegister = 'Aspirant';

    } else {
      this.titleRegister = 'Company';
     
    }
  }

  showSuccess() {
    this.toastr.success(`Welcome to ABC Jobs`, 'Successful registration');
  }

  showError() {
    this.toastr.error('Passwords do not match', 'Registration error');
  }

  showErrorLength() {
    this.toastr.error('password too short', 'Registration error');
  }
}
