var app = angular.module('app', [
	'ngAnimate',
]);

app.controller('animateExampleController', function($scope, $interval) {
	$scope.repeatItems = [];
	$scope.showMode = 0;

	$scope.animations = [
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
		$scope.repeatItems = [
			{id: 'foo', text: '1. Foo!'},
			{id: 'bar', text: '2. Bar!'},
			{id: 'baz', text: '3. Baz!'},
			{id: 'quz', text: '4. Quz!'},
			{id: 'flarp', text: '5. Flarp!'},
		]
			.filter(i => _.random(0, 10) >= 3);

		if (++$scope.showMode >= 3) $scope.showMode = 0;
	}, 2000);
});
