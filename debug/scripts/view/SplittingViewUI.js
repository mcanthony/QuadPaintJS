define([
	'Global',
	'Class'
], function(
	Global,
	Class
) {

	var SplittingViewUI = new Class({
		splittingView: null,
		projector: null,
		pen: null,
		viewUnderPen: null,
		initialize:function(splittingViewBase, canvas) {
			this.splittingView = splittingViewBase;
			this.canvas = canvas;
			this.onPenDown = this.onPenDown.bind(this);
			this.onPenUp = this.onPenUp.bind(this);
			this.onPenMove = this.onPenMove.bind(this);
			this.onPenDrag = this.onPenDrag.bind(this);
			this.onMouseWheel = this.onMouseWheel.bind(this);
			this.animate = this.animate.bind(this);
	        this.pen = {x:0, y:0, pressure: 0};
		},
		onPenDown:function(x, y) {
			this.pen.x = x;
			this.pen.y = y;
		},
		onPenDrag:function(x, y, pressure) {
			this.isPenDown = true;
			this.pen.pressure = pressure;
			this.updatePenAndView(x, y);
		},
		onPenMove:function(x, y) {
			this.updatePenAndView(x, y);
		},
		onPenUp:function(x, y) {
			this.pen.pressure = 0;
			this.isPenDown = false;
		},
		onMouseWheel:function(delta) {
			var zoomScale = 1 + delta * .001;
			this.viewUnderPen.zoom(zoomScale);
		},
		updatePenAndView:function(x, y) {
			if(this.pen.x != x && this.pen.y != y) {
				this.viewUnderPen = this.splittingView.getViewUnderCoordinate(x, y);
				this.pen.x = x;
				this.pen.y = y;
			}
		},
		animate:function() {
			if(!this.viewUnderPen) return;
			this.viewUnderPen.autoPan(this.pen);
		},
	    onResize:function(width, height) {
	    }
	});
	return SplittingViewUI;
});