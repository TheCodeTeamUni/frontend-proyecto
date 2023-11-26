import { Component, OnInit } from '@angular/core';
import { TestsService } from 'src/app/services/tests.service';

@Component({
  selector: 'app-aspirant-test',
  templateUrl: './aspirant-test.component.html',
  styleUrls: ['./aspirant-test.component.css']
})
export class AspirantTestComponent implements OnInit {


  public aspirantTests!: any[];
  public token!: any;

  constructor(
    private testService: TestsService
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem('Token');
    this.getAspirantTests()

  }


  getAspirantTests() {

    this.testService.getAspirantTest(this.token).subscribe((data) => {
      this.aspirantTests = data;
    });
  }

}
