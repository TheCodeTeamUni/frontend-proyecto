import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { startOfDay, endOfDay } from 'date-fns';
import { MonthViewDay } from 'calendar-utils';
import { es } from 'date-fns/locale';  // Importa el locale español



@Component({
  selector: 'app-basic-data',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './basic-data.component.html',
  styleUrls: ['./basic-data.component.css'],
})
export class BasicDataComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }


}
