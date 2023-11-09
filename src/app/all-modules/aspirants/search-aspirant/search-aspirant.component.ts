import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-aspirant',
  templateUrl: './search-aspirant.component.html',
  styleUrls: ['./search-aspirant.component.css']
})
export class SearchAspirantComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: true })
  public dtElement!: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public lstaspirants!: any[];
  public url: any = "aspirantsList";
  constructor() { }

  ngOnInit() {
    this.loadaspirants();
    // for data table configuration
    this.dtOptions = {
      // ... skipped ...
      pageLength: 10,
      dom: "lrtip",
    };
  }

  // Get aspirants List  Api Call
  loadaspirants() {



  }
  // destroy data table when leaving
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
