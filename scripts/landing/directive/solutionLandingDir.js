'use strict';

angular.module("shopApp")
	.directive("solutionLandingDir", function ($rootScope, ngDialog) {
		return {
			link: function (scope, element, attrs) {
				scope.clickImage = function(dialog){
					ngDialog.open(dialog);
				};
			},
			replace: true,
			scope: false,
			restrict:"EA",
			templateUrl: 'views/landing/directive/solutionLandingDir.html'
		};
	});
