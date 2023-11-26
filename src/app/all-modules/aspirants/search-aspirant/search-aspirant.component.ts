import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';
import { AspirantsService } from 'src/app/services/aspirants.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search-aspirant',
  templateUrl: './search-aspirant.component.html',
  styleUrls: ['./search-aspirant.component.css'],
})
export class SearchAspirantComponent implements OnInit {
  public lstSkills!: any[];
  public searchForm!: UntypedFormGroup;
  public lstaspirants!: any[];
  public selectedSkill!: string;
  public token!: any;
  public show!: Boolean;
  imagenPorDefectoUrl: string = 'assets/img/profiles/avatar-02.jpg';

  constructor(
    private dataService: DataService,
    private formBuilder: UntypedFormBuilder,
    private searchService: SearchService,
    private aspirantsService: AspirantsService
  ) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      skill: ['All aspirants', [Validators.required]],
    });
    this.loadSkills();
    this.token = localStorage.getItem('Token');
    this.search()
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
    if (this.searchForm.value.skill === "All aspirants") {
      this.aspirantsService.getAllAspirants(this.token)
        .subscribe((data) => {
          this.lstaspirants = data;
          this.show = false
        });
    } else {

      this.searchService.getSearch(this.selectedSkill, this.token)
        .subscribe((data) => {
          this.lstaspirants = data;
          this.show = true
          if (data.length === 0){
            this.typeSuccess(this.selectedSkill)
          }

        });
    }
  }


  

  typeSuccess(skill: string) {
    Swal.fire({
      title: 'There are No applicants',
      text: 'There are no applicants with the skill ' + skill + ' in ABC JOBS',
    });
  }
}
