/**
 * jquery.owl-filter.js
 * Create: 07-09-2016
 * Author: Bearsthemes
 * Version: 1.0.0
 */

"use strict";

$.fn.owlRemoveItem = function(owl,num) {
	var owl_data = owl.data('owlCarousel');
	
	/*owl_data._items = $.map(owl_data._items, function(data, index) {
		if(index != num) return data;
	})*/

	$(this).find('.owl-item').eq(num).remove();
}

$.fn.owlFilter = function(data, callback) {
	var owl = this,
		owl_data = $(owl).data('owlCarousel'),
		$elemCopy = $('<div>').css('display', 'none');

	/* check attr owl-clone exist */
	if(typeof($(owl).data('owl-clone')) == 'undefined') {
		$(owl).children('.owl-stage-outer').children('.owl-stage').children('.owl-item:not(.cloned)').clone().appendTo($elemCopy);
		$(owl).data('owl-clone', $elemCopy);
	}else {
		$elemCopy = $(owl).data('owl-clone');
	}
	
	/* clear content */
	owl.trigger('replace.owl.carousel', ['<div/>']);
	
	switch(data){
		case '*': 
			$elemCopy.children().each(function() {
				owl.trigger('add.owl.carousel', [$(this).children().clone()]);
			})
			break;
		default: 
			$elemCopy.find(data).each(function() {
				owl.trigger('add.owl.carousel', [$(this).clone()]);
			})
			break;
	}

	/* remove item empty when clear */
	owl.owlRemoveItem(owl,0);
	owl.trigger('refresh.owl.carousel').trigger('to.owl.carousel', [0]);

	
/*for (var i=0; i<$(owl).children('.owl-stage-outer').children('.owl-stage').children('.owl-item:not(.cloned)').length; i++) {
   owl.trigger('remove.owl.carousel', [i])
                             .trigger('refresh.owl.carousel');
}*/
	// callback
	if(callback) callback.call(this, owl);
}