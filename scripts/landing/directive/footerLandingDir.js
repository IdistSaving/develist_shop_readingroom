'use strict';

angular.module("shopApp")
	.directive("footerLandingDir", function ($rootScope) {
		return {
			link: function (scope, element, attrs) {
			},
			replace: true,
			scope: false,
			restrict:"EA",
			templateUrl: 'views/landing/directive/footerLandingDir.html'
		};
	});
