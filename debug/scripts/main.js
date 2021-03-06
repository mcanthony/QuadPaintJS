require.config({
	baseUrl: 'scripts',

	paths: {
		'text': 'vendor/require/text',
		'detector': 'vendor/Detector',
		'stats': 'vendor/stats.min',
		'three': 'vendor/three.r64',
		'KeyboardState': 'vendor/THREEx.KeyboardState',
		'RendererStats': 'vendor/THREEx.RendererStats',
		'signals': 'vendor/signals.min',
		//'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
		'jquery': 'vendor/jquery-1.10.1.min',
		'_': 'vendor/underscore',
		'screenfull': 'vendor/screenfull.min',
		'preloadjs': 'vendor/preloadjs.min',
		'BaseClass': 'vendor/class/BaseClass',
		'Class': 'vendor/class/Class'
	},

	shim: {
		'detector': {
			exports: 'Detector'
		},
		'stats': {
			exports: 'Stats'
		},
		'three': {
			exports: 'THREE'
		},
		'_': { 
			exports: '_'
		},
		'preloadjs': {
			exports: 'createjs'
		},
		'screenfull': {
			exports: 'screenfull'
		}
	}
});





require([
	// "jquery",
	// "preloader/Preloader",
	// 'text!watch/assets.json',
	// 'text!webglassets.json'
], function (
	// $,
	// Preloader,
	// WatchAssets,
	// WebGLAssets
) {

	// Preloader.loadModule(WatchAssets, true);
	// Preloader.loadModule(WebGLAssets, true);
	// Preloader.loadModule('{"files": ["/static/scripts/main.js?4"]}', true);

	// Preloader.start(function(){

		require([
			'MainPresenter'
		], function(
			MainPresenter
		) {
			var mainPresenter = new MainPresenter();
		});

	// });

});
