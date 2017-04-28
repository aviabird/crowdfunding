jQuery( document ).ready(function( $ ) {
"use strict"
/*-----------------------------------------------------------------------------------
    Animated progress bars
/*-----------------------------------------------------------------------------------*/
  $('.progress-bars').waypoint(function() {
    $('.progress').each(function(){
      $(this).find('.progress-bar').animate({
        width:$(this).attr('data-percent')
      },200);
    });
  },
	{ 
	offset: '100%',
    triggerOnce: true 
  });
/*-----------------------------------------------------------------------------------
    TESTNMONIALS STYLE 2
/*-----------------------------------------------------------------------------------*/
  $('.testi-slide-2').bxSlider({
    mode: 'fade',
    auto: true
  });

/*-----------------------------------------------------------------------------------*/
/*		STICKY NAVIGATION
/*-----------------------------------------------------------------------------------*/
  $(".sticky").sticky({topSpacing:0});
/*-----------------------------------------------------------------------------------*/
/*  FULL SCREEN
/*-----------------------------------------------------------------------------------*/
  $('.full-screen').superslides({});
/*-----------------------------------------------------------------------------------*/
/*    Parallax
/*-----------------------------------------------------------------------------------*/
  jQuery.stellar({
    horizontalScrolling: false,
    scrollProperty: 'scroll',
    positionProperty: 'position',
  });

  $('#slides').superslides({
        animation: 'fade',
      play: 8000
  });
});


/*-----------------------------------------------------------------------------------*/
/*    PIE CHART
/*-----------------------------------------------------------------------------------*/
$('#pie-1').pieChart({
	barColor: '#39df12',
    trackColor: '#e8e8e8',
    lineCap: 'round',
    lineWidth: 10,
    	onStep: function (from, to, percent) {
    		$(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
});
$('#pie-2').pieChart({
	barColor: '#39df12',
    trackColor: '#e8e8e8',
    lineCap: 'round',
    lineWidth: 10,
    	onStep: function (from, to, percent) {
    	$(this.element).find('.pie-value').text(Math.round(percent) + '%');
	}
});
/*-----------------------------------------------------------------------------------*/
/* 		Active Menu Item on Page Scroll
/*-----------------------------------------------------------------------------------*/
$(window).scroll(function(event) {
		Scroll();
});	
$('.scroll a').on('click',function() {  
	$('html, body').animate({scrollTop: $(this.hash).offset().top -70}, 800);
		return false;
});
// User define function
function Scroll() {
var contentTop      =   [];
var contentBottom   =   [];
var winTop      =   $(window).scrollTop();
var rangeTop    =   102;
var rangeBottom =   100;
$('nav').find('.scroll a').each(function(){
	contentTop.push( $( $(this).attr('href') ).offset().top);
		contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
})
$.each( contentTop, function(i){
if ( winTop > contentTop[i] - rangeTop ){
	$('nav li.scroll')
	  .removeClass('active')
		.eq(i).addClass('active');			
}}  )};

