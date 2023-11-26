import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { InterviewsService } from 'src/app/services/interviews.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-interview-detail',
  templateUrl: './interview-detail.component.html',
  styleUrls: ['./interview-detail.component.css']
})
export class InterviewDetailComponent implements OnInit {

  public token!: any;
  public interviewId!: string;
  public InterviewResultForm!: UntypedFormGroup;


  //Data

  idAspirant!: string;
  nameAspirant!: string;
  lastNameAspirant!: string;
  role!: string;
  date!: string;
  notes!: string;
  createdAt!: string;
  result!: string;
  resultNotes!: string;


  constructor(
    private interviewsService: InterviewsService,
    private route: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
  ) { }

  ngOnInit() {
    this.InterviewResultForm = this.formBuilder.group({
      result: ['Select...', [Validators.required]],
      notes: ['', [Validators.required]],
    });
    this.token = localStorage.getItem('Token');
    this.interviewId = this.route.snapshot.paramMap.get('id')!;
    this.getInterview()
    this.getInterviewResult()
  }

  getInterview() {
    this.interviewsService
      .getInterview(this.token, this.interviewId)
      .subscribe((data) => {
        this.idAspirant        = data.idAspirant
        this.nameAspirant      = data.nameAspirant
        this.lastNameAspirant  = data.lastNameAspirant
        this.role              = data.role
        this.date              = data.date
        this.notes             = data.notes
      });
  }


  getInterviewResult() {
    this.interviewsService
      .getInterviewResult(this.token, this.interviewId)
      .subscribe((data) => {
        this.result        = data.result
        this.resultNotes     = data.notes
      });
  }





  addInterviewResult(){
    this.interviewsService
      .addResultInterview(this.InterviewResultForm.value, this.token, this.interviewId)
      .subscribe((data) => {
        this.typeSuccess();
        this.getInterviewResult()
      });

  }



  typeSuccess() {
    Swal.fire({
      title: 'Success Record',
      text: 'Your data has been successfully saved in ABC JOBS!',
    });
  }

}
