import { Component, OnInit, NgZone, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-information',
  templateUrl: './company-information.component.html',
  styleUrls: ['./company-information.component.css']
})
export class CompanyInformationComponent implements OnInit {

  public innerHeight: any;

  constructor(private ngZone: NgZone, private router: Router) {
    window.onresize = (e) => {
      this.ngZone.run(() => {
        this.innerHeight = window.innerHeight + 'px';
      });
    };
    this.getScreenHeight();
  }

  getScreenHeight() {
    this.innerHeight = window.innerHeight + 'px';
  }

  ngOnInit() {
    // Page Content Height
    if ($('.page-wrapper').length > 0) {
      var height: any = $(window).height();
      $('.page-wrapper').css('min-height', height);
    }

    // Page Content Height Resize

    $(window).resize(function () {
      if ($('.page-wrapper').length > 0) {
        var height: any = $(window).height();
        $('.page-wrapper').css('min-height', height);
      }
    });

    /* this.router.navigateByUrl("/layout/dashboard/dashboard-aspirant"); */
  }
  onResize(event: any) {
    this.innerHeight = event.target.innerHeight + 'px';
  }

}
