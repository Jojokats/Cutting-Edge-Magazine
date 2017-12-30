$(document).ready(function() {

  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });

  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {
      var sectionOffset = $(this.hash).offset().top;

      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');

      }
    });
  }); // end

  // create the back to top button
    $('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');

    var amountScrolled = 300;

    $(window).scroll(function() {
    	if ( $(window).scrollTop() > amountScrolled ) {
    		$('a.back-to-top').fadeIn('slow');
    	} else {
    		$('a.back-to-top').fadeOut('slow');
    	}
    });

    $('a.back-to-top, a.simple-back-to-top').click(function() {
    	$('html, body').animate({
    		scrollTop: 0
    	}, 700);
    	return false;
    });

});
