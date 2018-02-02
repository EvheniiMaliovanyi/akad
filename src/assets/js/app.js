//=require jquery.min.js

// to inlude bootstrap plugins add "=" sign below
//=require javascripts/bootstrap/transition.js
//=require javascripts/bootstrap/collapse.js
// require javascripts/bootstrap/*.*
// require javascripts/bootstrap.min.js

//=require slick.min.js
//=require libs/isotope.pkgd.min.js
//=require map.js

;(function($){





	$(document).ready(function(){
		$slider = $('.ba-slider');

		$slider.slick({
			arrows: false,
			dots: true,
			slide: '.ba-slide'

		});
	});




	var worksGrid = $('.ba-portfolio');


	$(window).on('load', function(){
		worksGrid.isotope({
		  // options
		  itemSelector: '.ba-portfolio__item',
		  percentPosition: true,
		  // masonry:{
		  // 	columnWidth: '.ba-portfolio__item',
		  // }
		});


		// filter items on button click
		$('.ba-portfolio-filter').on( 'click', '[data-filter]', function(e) {
		 e.preventDefault();
		  var filterValue = $(this).data('filter');
		  worksGrid.isotope({ filter: filterValue });

		  $('.ba-active[data-filter]').removeClass('ba-active');
		  $(this).addClass('ba-active');

		});
	});


})(jQuery);
