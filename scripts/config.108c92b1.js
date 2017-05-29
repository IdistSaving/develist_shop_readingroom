'use strict';

angular.module('shopApp')
  .config(function ($resourceProvider, $stateProvider, $urlRouterProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
    $stateProvider

      // LANDING
      .state('landing', { url: '/', templateUrl: 'views/landing/landing.html', controller: 'LandingCtrl', group: 'landing' })

    $urlRouterProvider.otherwise('/');
  });
