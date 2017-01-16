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
			id: 'fold',
			class: 'animate animate-fold',
		},
		{
			id: 'pop',
			class: 'animate animate-pop',
		},
		{
			id: 'scale',
			class: 'animate animate-scale',
		},
		{
			id: 'scaleZ',
			class: 'animate animate-fade animate-fold-y',
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
