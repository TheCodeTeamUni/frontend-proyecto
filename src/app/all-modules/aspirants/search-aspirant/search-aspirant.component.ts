import { Component, OnInit, ViewChild } from '@angular/core';
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
  public lstSkills!: any[];
  public searchForm!: UntypedFormGroup;
  public lstaspirants!: any[];
  public selectedSkill!: string;
  public token!: any;
  photo!: string;
  imagenPorDefectoUrl: string = 'assets/img/profiles/avatar-02.jpg';

  constructor(
    private dataService: DataService,
    private formBuilder: UntypedFormBuilder,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      skill: ['Search aspirant for skill...', [Validators.required]],
    });
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

  imagenNoEncontrada() {
    this.photo = this.imagenPorDefectoUrl;
  }
}
