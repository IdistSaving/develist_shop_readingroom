'use strict';

angular.module("shopApp")
	.directive("solutionsLandingDir", function ($rootScope) {
		return {
			link: function (scope, element, attrs) {

				scope.hoverIn = function(solution){
					solution.hoverIn = true;
				};

				scope.hoverOut = function(solution){
					solution.hoverIn = false;
				};

				// Initialize Function Section
				scope.initialize = function(){

				};
			},
			replace: true,
			scope: false,
			restrict:"EA",
			templateUrl: 'views/landing/directive/solutionsLandingDir.html'
		};
	});
