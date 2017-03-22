angular.module('app', [
	'angular-mfdc-router',
	'ngAnimate',
])
	// Configure $location to not stupidly encode URLS {{{
	.config(function($locationProvider) {
		$locationProvider.hashPrefix(''); // URL Mode: http://domain/#/path
	})
	// }}}
	// If no route matches go to '/' {{{
	.run(function($router) {
		$router.rule().priority('lowest').redirect('/');
	})
	// }}}
	// Global scope {{{
	.controller('GlobalCtrl', function($router, $scope) {
		var $ctrl = this;
		$ctrl.$router = $router;
	})
	// }}}
	// Path: / {{{
	.run($router => $router.when('/').component('demoDashboard'))
	.component('demoDashboard', {
		templateUrl: '/views/dashboard.tmpl.html',
	})
	// }}}
	// Path: /all {{{
	.run($router => $router.when('/all').component('demoAll'))
	.component('demoAll', {
		templateUrl: '/views/all.tmpl.html',
		controller: function($interval) {
			var $ctrl = this;

			$ctrl.repeatItems = [];
			$ctrl.showMode = 0;

			$ctrl.animations = [
				{
					id: 'fade',
					class: 'animate animate-fade',
				},
				{
					id: 'reflowWidth',
					class: 'animate animate-reflow-width',
				},
				{
					id: 'reflowHeight',
					class: 'animate animate-reflow-height',
				},
				{
					id: 'reflowScale',
					class: 'animate animate-reflow-scale',
				},
				{
					id: 'fadeReflowWidth',
					class: 'animate animate-fade animate-reflow-width',
				},
				{
					id: 'fadeReflowHeight',
					class: 'animate animate-fade animate-reflow-height',
				},
				{
					id: 'fadeReflowScale',
					class: 'animate animate-fade animate-reflow-scale',
				},
			];

			$interval(function() {
				$ctrl.repeatItems = [
					{id: 'foo', text: '1. Foo!'},
					{id: 'bar', text: '2. Bar!'},
					{id: 'baz', text: '3. Baz!'},
					{id: 'quz', text: '4. Quz!'},
					{id: 'flarp', text: '5. Flarp!'},
				]
					.filter(i => _.random(0, 10) >= 3);

				if (++$ctrl.showMode >= 3) $ctrl.showMode = 0;
			}, 2000);
		},
	})
	// }}}
	// Path: /mixer {{{
	.run($router => $router.when('/mixer').component('demoMixer'))
	.component('demoMixer', {
		templateUrl: '/views/mixer.tmpl.html',
		controller: function($interval, $scope) {
			var $ctrl = this;

			$ctrl.animations = {
				primary: [
					{class: ''},
					{class: 'animate-fade'},
				],
				reflow: [
					{class: ''},
					{class: 'animate-reflow-width'},
					{class: 'animate-reflow-height'},
					{class: 'animate-reflow-scale'},
				],
				duration: [
					{class: ''},
					{class: 'animate-duration-100ms'},
					{class: 'animate-duration-200ms'},
					{class: 'animate-duration-500ms'},
					{class: 'animate-duration-1s'},
					{class: 'animate-duration-2s'},
					{class: 'animate-duration-5s'},
					{class: 'animate-duration-10s'},
					{class: 'animate-duration-20s'},
					{class: 'animate-duration-30s'},
				],
				easing: [
					{class: ''},
					{class: 'animate-easing-linear'},
					{class: 'animate-easing-ease'},
					{class: 'animate-easing-ease-in'},
					{class: 'animate-easing-ease-out'},
					{class: 'animate-easing-ease-in-out'},
				],
			};
			$ctrl.selected = {
				class: '',
				primary: 'animate-fade',
				reflow: 'animate-reflow-scale',
				duration: '',
				easing: '',
			};
			$scope.$watch('$ctrl.selected', ()=> {
				$ctrl.selected.class = [
					'animate',
					$ctrl.selected.primary,
					$ctrl.selected.reflow,
					$ctrl.selected.duration,
					$ctrl.selected.easing,
				]
					.filter(i => !!i)
					.join(' ')
			}, true);

			$ctrl.repeatItems = [];
			$ctrl.showMode = 0;
			$interval(function() {
				$ctrl.repeatItems = [
					{id: 'foo', text: '1. Foo!'},
					{id: 'bar', text: '2. Bar!'},
					{id: 'baz', text: '3. Baz!'},
					{id: 'quz', text: '4. Quz!'},
					{id: 'flarp', text: '5. Flarp!'},
				]
					.filter(i => _.random(0, 10) >= 3);

				if (++$ctrl.showMode >= 3) $ctrl.showMode = 0;
			}, 2000);
		},
	})
	// }}}
