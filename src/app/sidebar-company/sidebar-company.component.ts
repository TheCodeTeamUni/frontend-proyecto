import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

declare const $: any;
@Component({
  selector: 'app-company-sidebar',
  templateUrl: './sidebar-company.component.html',
  styleUrls: ['./sidebar-company.component.css'],
})
export class SidebarCompanyComponent implements OnInit {
  url!: string;
  url1: any;
  activeRoute!: string;
  active2Route: any;
  base = '';
  page = '';
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        $('.main-wrapper').removeClass('slide-nav');
        $('.sidebar-overlay').removeClass('opened');
        const url = event.url.split('/');
        this.url = url[2];
        this.url1 = url[2];
        this.base = url[2];
        this.page = url[3];
        this.activeRoute = this.url;
        this.active2Route = this.url1;
      }
    });
  }

  ngOnInit() {
    // Variables declarations

    var $wrapper = $('.main-wrapper');
    var $pageWrapper = $('.page-wrapper');
    var $slimScrolls = $('.slimscroll');

    // Sidebar

    var Sidemenu = function (this: any) {
      this.$menuItem = $('#sidebar-menu a');
    };

    function init() {
      var $this = Sidemenu;
      $('#sidebar-menu a').on('click', function (this: any, e: any) {
        if ($(this).parent().hasClass('submenu')) {
          e.preventDefault();
        }
        if (!$(this).hasClass('subdrop')) {
          $('ul', $(this).parents('ul:first')).slideUp(350);
          $('a', $(this).parents('ul:first')).removeClass('subdrop');
          $(this).next('ul').slideDown(350);
          $(this).addClass('subdrop');
        } else if ($(this).hasClass('subdrop')) {
          $(this).removeClass('subdrop');
          $(this).next('ul').slideUp(350);
        }
      });
      $('#sidebar-menu ul li.submenu a.active')
        .parents('li:last')
        .children('a:first')
        .addClass('active')
        .trigger('click');
    }

    // Sidebar Initiate
    init();

    // Mobile menu sidebar overlay

    $('body').append('<div class="sidebar-overlay"></div>');
    $(document).on('click', '#mobile_btn', function () {
      $wrapper.toggleClass('slide-nav');
      $('.sidebar-overlay').toggleClass('opened');
      $('html').addClass('menu-opened');
      return false;
    });

    // Sidebar overlay

    $('.sidebar-overlay').on('click', function () {
      $wrapper.removeClass('slide-nav');
      $('.sidebar-overlay').removeClass('opened');
      $('html').removeClass('menu-opened');
    });

    // Page Content Height

    if ($('.page-wrapper').length > 0) {
      var height = $(window).height();
      $('.page-wrapper').css('min-height', height);
    }

    // Page Content Height Resize

    $(window).resize(function () {
      if ($('.page-wrapper').length > 0) {
        var height = $(window).height();
        $('.page-wrapper').css('min-height', height);
      }
    });
  }

  setActive() {
    this.activeRoute = this.url;
    this.active2Route = this.url1;
  }
}
