import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../services/register.service';

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
  public name!: string;

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
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.typename = localStorage.getItem('type')
    this.type();
  }

  submit() {
    this.register = {
      username: this.form.value.username,
      email: this.form.value.email,
      password: this.form.value.password,
      type: localStorage.getItem('type')
    };

    if (this.form.value.password != this.form.value.confirmPassword) {
      this.isvalidconfirmpassword = true;
      this.toastr.error('Passwords do not match', 'Registration error');
    } else {
      this.isvalidconfirmpassword = false;
      this.registerService.register(this.register).subscribe((data) => {});
      localStorage.removeItem('type');
    }
  }

  ngOnDestroy() {}
  iconLogle() {
    this.Toggledata = !this.Toggledata;
  }

  type(){
     if(this.typename == "1"){
       this.name = "Aspirant"
     } else{
       this.name = "Company"
    }
  }
}
