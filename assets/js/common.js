$(document).ready(function () {
  //header search click to expand 
  $(".cs-btn-submit").click(function () {
    $(".cs-txt-livesearch").toggleClass("sopen");
    $(".cs-btn-close").addClass("cs-show");
    $(".cs-btn-submit").addClass("cs-hide");
  })



  $('.country_list.sm-device, .main_navbar .icon_group .close_icon').on('click', function () {
    $('.country_list_collapse').collapse('toggle');
    $('.icon_group').toggleClass('show_close')
  })

  $('.hamberger_icon').on('click', function () {
    $('.navbar-collapse').collapse('toggle');
    $('.country_list.sm-device').toggleClass('events_none');
  })




})