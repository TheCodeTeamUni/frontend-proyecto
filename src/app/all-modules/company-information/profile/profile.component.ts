import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public photo!: any;
  public imagenPorDefectoUrl: string = 'assets/img/profiles/avatar-02.jpg';

  constructor() { }

  ngOnInit() {
  }


  imagenNoEncontrada() {
    this.photo = this.imagenPorDefectoUrl;
  }

}
