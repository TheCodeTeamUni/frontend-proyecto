import { Component, OnInit } from '@angular/core';
import { InterviewsService } from 'src/app/services/interviews.service';

@Component({
  selector: 'app-aspirants-interviews',
  templateUrl: './aspirants-interviews.component.html',
  styleUrls: ['./aspirants-interviews.component.css']
})
export class AspirantsInterviewsComponent implements OnInit {

  public lstInterviews: any[] = [];
  public token!: any;

  constructor(private interviewsService: InterviewsService) { }

  ngOnInit() {
    this.token = localStorage.getItem('Token');
    this.getAspirantInterviews();
  }


  getAspirantInterviews() {
    this.interviewsService.getAspirantInterviews(this.token)
      .subscribe(
        (data) => {
          if (data) {
            console.log('Datos de entrevistas de aspirantes:', data);
            this.lstInterviews = data;
            this.formatDates();
          } else {
            console.error('Error: Datos de entrevistas de aspirantes indefinidos.');
          }
        },
        (error) => {
          console.error('Error obteniendo entrevistas de aspirantes:', error);
        }
      );
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
