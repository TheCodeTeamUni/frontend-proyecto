import { Component, OnInit } from '@angular/core';
import { InterviewsService } from 'src/app/services/interviews.service';

@Component({
  selector: 'app-company-interviews',
  templateUrl: './company-interviews.component.html',
  styleUrls: ['./company-interviews.component.css']
})
export class CompanyInterviewsComponent implements OnInit {

  public lstInterviews!: any[];
  public token!: any;

  constructor(private interviewsService: InterviewsService) { }

  ngOnInit() {
    this.token = localStorage.getItem('Token');
    this.getCompanyInterviews();
  }

  getCompanyInterviews() {
    this.interviewsService
      .getCompanyInterviews(this.token)
      .subscribe((data) => {
        this.lstInterviews = data;
        this.formatDates(); // Llamamos a la función para formatear las fechas después de obtener los datos
      });
  }

  formatDates() {
    if (this.lstInterviews) {
      this.lstInterviews.forEach(interview => {
        const date = new Date(interview.date);
        interview.date = date.toLocaleString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          timeZoneName: 'short'
        });
      });
    }
  }
}
