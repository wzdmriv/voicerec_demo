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
  var dww = document.getElementById('data_text-wrapper').clientWidth;
  var dhh = document.getElementById('data_text-wrapper').clientHeight;
  var ddhh = document.getElementById('data_text').clientHeight;
  var thh = document.getElementById('timer-wrapper').clientHeight;
  var tthh = document.getElementById('timer').clientHeight;
  var size = Math.min(dww,dhh*2);
  var data_size = parseInt(size*0.35);
  var timer_bottom = parseInt(size*0.1);
  var circle_size = parseInt(size*0.8);
  $('#data_text').css({'font-size':data_size+'px', 'top':(dhh-ddhh)/2+'px'});
  $('#timer').css({'font-size':thh*0.5+'px', 'top':(thh-tthh)/2+'px'});
  $('#data_circle').css({'width':circle_size+'px','height':circle_size+'px'});
}