'use strict';

angular.module("shopApp")
	.directive("buttonLandingDir", function ($rootScope, ngDialog) {
		return {
			link: function (scope, element, attrs) {

				scope.clickButton = function(dialog){
					ngDialog.open(dialog);
				};

			},
			replace: true,
			scope: false,
			restrict:"EA",
			templateUrl: 'views/landing/directive/buttonLandingDir.html'
		};
	});
