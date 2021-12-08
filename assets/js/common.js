$(document).ready(function () {
  //header search click to expand 
  $(".cs-btn-submit").click(function () {
    $(".cs-txt-livesearch").toggleClass("sopen");
    $(".cs-btn-close").addClass("cs-show");
    $(".cs-btn-submit").addClass("cs-hide");
  })


  // small device navbar collapse
  $('.country_list.sm-device, .main_navbar .icon_group .close_icon').on('click', function () {
    $('.country_list_collapse').collapse('toggle');
    $('.icon_group').toggleClass('show_close')
  })

  $('.hamberger_icon').on('click', function () {
    $('.small_device_navbar').collapse('toggle');
    $('.country_list.sm-device').toggleClass('events_none');
  })

  // small device submenu collapse
  $('.sub_menu_btn').on('click', function () {
    $(this).parent().children('.sub_menu.collapse, .country_list_submenu').collapse('toggle');
    $(this).toggleClass('icon_rotate');
  })




})