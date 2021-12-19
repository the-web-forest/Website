
jQuery(document).ready(function() {	
	
    /*
        Background slideshow
    */
	$('.banner-area').backstretch([
	                     "images/backgrounds/1.jpg"
	                   , "images/backgrounds/2.jpg"
	                   , "images/backgrounds/3.jpg",
	                   , "images/backgrounds/4.jpg",
	                   , "images/backgrounds/5.jpg"
	                  ], {duration: 3000, fade: 750});
	

	$("#typed").typed({
		// strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
		stringsElement: $('#typed-strings'),
		typeSpeed: 50,
		backDelay: 1000,
		loop: true,
		contentType: 'html', // or text
		// defaults to false for infinite loop
		loopCount: false,
		callback: function(){ foo(); },
		resetCallback: function() { newTyped(); }
	});

	$(".reset").click(function(){
		$("#typed").typed('reset');
	});
 
 
    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("Callback"); }

	
});

// cowntdown function. Set the date below (December 1, 2016 00:00:00):
var austDay = new Date("January 1, 2022 00:00:00");
	$('#countdown').countdown({until: austDay, layout: '<div class="item"><p>{dn}</p> {dl}</div> <div class="item"><p>{hn}</p> {hl}</div> <div class="item"><p>{mn}</p> {ml}</div> <div class="item"><p>{sn}</p> {sl}</div>'});
	$('#year').text(austDay.getFullYear());
	
// smooth scrolling	
	$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
		$('html,body').animate({
		  scrollTop: target.offset().top
		}, 1000);
		return false;
	  }
	}
  });
});
