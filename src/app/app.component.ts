import { Component, OnInit } from '@angular/core';

declare const $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'abcjobs';

  ngOnInit() {
    $('.sidebar-overlay').on('click', function (this: any) {
      var $wrapper = $('.main-wrapper');
      $('html').removeClass('menu-opened');
      $(this).removeClass('opened');
      $wrapper.removeClass('slide-nav');
      $('.sidebar-overlay').removeClass('opened');
      $('#task_window').removeClass('opened');
    });
    // Summernote

    if ($('.summernote').length > 0) {
      $('.summernote').summernote({
        height: 200, // set editor height
        minHeight: null, // set minimum height of editor
        maxHeight: null, // set maximum height of editor
        focus: false, // set focus to editable area after initializing summernote
      });
    }
    // Small Sidebar

    $(document).on('click', '#toggle_btn', function () {
      if ($('body').hasClass('mini-sidebar')) {
        $('body').removeClass('mini-sidebar');
        $('.subdrop + ul').slideDown();
      } else {
        $('body').addClass('mini-sidebar');
        $('.subdrop + ul').slideUp();
      }
      // setTimeout(function(){
      // 	mA.redraw();
      // 	mL.redraw();
      // }, 300);
      return false;
    });
    $(document).on('mouseover', function (e: any): any {
      e.stopPropagation();
      if (
        $('body').hasClass('mini-sidebar') &&
        $('#toggle_btn').is(':visible')
      ) {
        var targ = $(e.target).closest('.sidebar').length;
        if (targ) {
          $('body').addClass('expand-menu');
          $('.subdrop + ul').slideDown();
        } else {
          $('body').removeClass('expand-menu');
          $('.subdrop + ul').slideUp();
        }
        return false;
      }
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

    // Select 2

    if ($('.select').length > 0) {
      $('.select').select2({
        minimumResultsForSearch: -1,
        width: '100%',
      });
    }

    // Datetimepicker

    if ($('.datetimepicker').length > 0) {
      $('.datetimepicker').datetimepicker({
        format: 'DD-MM-YYYY',
        icons: {
          up: 'fas fa-angle-up',
          down: 'fas fa-angle-down',
          next: 'fas fa-angle-right',
          previous: 'fas fa-angle-left',
        },
      });
      $('.datetimepicker')
        .on('dp.show', function (this: any) {
          $(this)
            .closest('.table-responsive')
            .removeClass('table-responsive')
            .addClass('temp');
        })
        .on('dp.hide', function (this: any) {
          $(this)
            .closest('.temp')
            .addClass('table-responsive')
            .removeClass('temp');
        });
    }

    // Tooltip

    if ($('[data-bs-toggle="tooltip"]').length > 0) {
      $('[data-bs-toggle="tooltip"]').tooltip();
    }

    // Datatable

    if ($('.datatable').length > 0) {
      $('.datatable').DataTable({
        bFilter: false,
      });
    }

    // Check all email

    $(document).on('click', '#check_all', function () {
      $('.checkmail').click();
      return false;
    });
    if ($('.checkmail').length > 0) {
      $('.checkmail').each(function (this: any) {
        $(this).on('click', function (this: any) {
          if ($(this).closest('tr').hasClass('checked')) {
            $(this).closest('tr').removeClass('checked');
          } else {
            $(this).closest('tr').addClass('checked');
          }
        });
      });
    }

    // Mail important

    $(document).on('click', '.mail-important', function (this: any) {
      $(this).find('i.fa').toggleClass('fa-star').toggleClass('fa-star-o');
    });

    // Summernote

    if ($('.summernote').length > 0) {
      $('.summernote').summernote({
        height: 200, // set editor height
        minHeight: null, // set minimum height of editor
        maxHeight: null, // set maximum height of editor
        focus: false, // set focus to editable area after initializing summernote
      });
    }

    // Sidebar Slimscroll

    var $slimScrolls = $('.slimscroll');
    if ($slimScrolls.length > 0) {
      $slimScrolls.slimScroll({
        height: 'auto',
        width: '100%',
        position: 'right',
        size: '7px',
        color: '#ccc',
        allowPageScroll: false,
        wheelStep: 10,
        touchScrollStep: 100,
      });
      var wHeight = $(window).height() - 60;
      $slimScrolls.height(wHeight);
      $('.sidebar .slimScrollDiv').height(wHeight);
      $(window).resize(function () {
        var rHeight = $(window).height() - 60;
        $slimScrolls.height(rHeight);
        $('.sidebar .slimScrollDiv').height(rHeight);
      });
    }
  }
}
