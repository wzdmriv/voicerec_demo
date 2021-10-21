//for hum menu
$(function($) {
    var $nav   = $('#navArea');
    var $btn   = $('.toggle_btn');
    var $mask  = $('#mask');
    var open   = 'open';

    $btn.on( 'click', function() {
      if ( ! $nav.hasClass( open ) ) {
        $nav.addClass( open );
      } else {
        $nav.removeClass( open );
      }
    });

    $mask.on('click', function() {
      $nav.removeClass( open );
    });
});



function close_startmodal(){
  var noSleep = new NoSleep();
  noSleep.enable();
  $('#start_modalArea').fadeOut();
}



function layout(){
  var ww = window.innerWidth;
  var hh = window.innerHeight;
  $('.rec_button').css({
      'height':hh + "px"
  });
  var rec_w =  document.getElementById( "rec_button" ).clientWidth;
  var rec_h =  document.getElementById( "rec_button" ).clientHeight;
  var rec_size = parseInt(Math.min(rec_w,rec_h)*0.15);
  $('#rec_button').css({'font-size':rec_size+'px','line-height':rec_h+'px'});
}

window.onload = function() {
  layout()
}