'use strict';

angular.module("shopApp")
	.directive("titleLandingDir", function () {
		return {
			link: function (scope, element, attrs, SweetAlert) {
			},
			replace: true,
			scope: false,
			restrict:"EA",
			templateUrl: 'views/landing/directive/titleLandingDir.html'
		};
	});
