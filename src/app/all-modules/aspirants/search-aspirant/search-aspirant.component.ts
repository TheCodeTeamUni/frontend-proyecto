import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-aspirant',
  templateUrl: './search-aspirant.component.html',
  styleUrls: ['./search-aspirant.component.css'],
})
export class SearchAspirantComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: true })
  public dtElement!: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public lstSkills!: any[];
  public url: any = 'aspirantsList';
  public searchForm!: UntypedFormGroup;
  public lstaspirants!: any[];
  public selectedSkill!: string;
  public token!: any;

  constructor(
    private dataService: DataService,
    private formBuilder: UntypedFormBuilder,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      skill: ['Select...', [Validators.required]],
    });

    this.dtOptions = {
      // ... skipped ...
      pageLength: 10,
      dom: 'lrtip',
    };
    this.loadSkills();
    this.token = localStorage.getItem('Token');
  }

  loadSkills() {
    this.lstSkills = this.dataService.skills;
  }

  onSkillSelectionChange(event: any) {
    // Esta función se llamará cuando cambie la selección del skill
    const selectedSkill = event.target.value;
    this.selectedSkill = selectedSkill;
    // Puedes almacenar selectedSkill en una variable de clase si lo necesitas para otras operaciones
  }

  search() {
    this.searchService
      .getSearch(this.selectedSkill, this.token)
      .subscribe((data) => {
        this.lstaspirants = data;
      });
  }
}
