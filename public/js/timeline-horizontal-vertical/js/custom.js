'use strict';

(function ($) {
	$(document).ready(function () {
		var $timeline_horizontal_vertical = $('.tm-timeline-horizontal-vertical');
		if ( $timeline_horizontal_vertical.length > 0 ) {
			$timeline_horizontal_vertical.each(function () {
				var $this = $(this);

				var mode						= ( $this.data("tm-mode") === undefined ) ? 'horizontal': $this.data("tm-mode");
				var forceVerticalMode			= ( $this.data("tm-force-vertical-mode") === undefined ) ? 800: $this.data("tm-force-vertical-mode");
				var horizontalStartPosition		= ( $this.data("tm-horizontal-start-position") === undefined ) ? 'top': $this.data("tm-horizontal-start-position");
				var moveItems					= ( $this.data("tm-move-items") === undefined ) ? 1: $this.data("tm-move-items");
				var startIndex					= ( $this.data("tm-start-index") === undefined ) ? 1: $this.data("tm-start-index");

				var verticalStartPosition		= ( $this.data("tm-vertical-start-position") === undefined ) ? 'right': $this.data("tm-vertical-start-position");
				var verticalTrigger				= ( $this.data("tm-vertical-trigger") === undefined ) ? '150px': $this.data("tm-vertical-trigger");
				var visibleItems				= ( $this.data("tm-visible-items") === undefined ) ? 4: $this.data("tm-visible-items");

				$this.timeline({
					mode: mode,
					forceVerticalMode: forceVerticalMode,
					horizontalStartPosition: horizontalStartPosition,
					moveItems: moveItems,
					startIndex: startIndex,

					
					verticalStartPosition: verticalStartPosition,
					verticalTrigger: verticalTrigger,
					visibleItems: visibleItems
				});
			});
		}
	});
})(jQuery);