'use strict';

angular.module("shopApp")
	.directive("priceLandingDir", function ($rootScope) {
		return {
			link: function (scope, element, attrs) {
			},
			replace: true,
			scope: false,
			restrict:"EA",
			templateUrl: 'views/landing/directive/priceLandingDir.html'
		};
	});
