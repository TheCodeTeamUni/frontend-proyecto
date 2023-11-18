import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects-detail',
  templateUrl: './projects-detail.component.html',
  styleUrls: ['./projects-detail.component.css'],
})
export class ProjectsDetailComponent implements OnInit {
  public projectId!: string;

  public lstAspirants!: any[];
  public token!: any;

  public nameProject!: string;
  public startDate!: string;
  public endDate!: string;
  public aspirants!: string;
  public description!: string;

  constructor(
    private route: ActivatedRoute,
    private projectInfo: ProjectsService
  ) {}

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('id')!;
    this.token = localStorage.getItem('Token');
    this.getAspirantToProject();
  }

  getAspirantToProject() {
    this.projectInfo
      .getAspirantToProject(this.token, this.projectId)
      .subscribe((data) => {
        this.lstAspirants = data.aspirants;
        this.nameProject=data.project.nameProject
        this.startDate=data.project.startDate
        this.endDate=data.project.endDate
        this.aspirants=data.project.aspirants
        this.description=data.project.description
      });
  }
}
