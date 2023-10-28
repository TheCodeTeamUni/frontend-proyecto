import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DatePipe } from "@angular/common";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  public addapplicantsForm!: UntypedFormGroup;
  public url = "applicantsList";
  public pipe = new DatePipe("en-US");
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // Add applicants form validation
    this.addapplicantsForm = this.formBuilder.group({
      FirstName: ["", [Validators.required]],
      dob: ["", [Validators.required]],
      rollNo: ["", [Validators.required]],
      emailAddress: ["", [Validators.required]],
    });
  }

  // Add applicants submit call
  addapplicants() {

  }

}
