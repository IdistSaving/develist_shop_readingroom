'use strict';

/**
 * @ngdoc overview
 * @name shopApp
 * @description
 * # shopApp
 *
 * Main module of the application.
 */
angular
  .module('shopApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'monospaced.elastic',
    'oitozero.ngSweetAlert',
    'ngDialog',
    'ngUrlParser',
    'angular-inview'
  ])
  .run(function($rootScope, $state, $resource, urlParser, stateS, storageS, TokenSignInR, SiteR) {

  // $rootScope._ = lodash;
  if($state) $rootScope.state = $state;
  if(stateS) $rootScope.stateS = stateS;
  if(urlParser) $rootScope.urlParser = urlParser;

  // if(urlParser.getHostname()=='localhost'){
  //
  // }

  // Initialize Function Seciton
  $rootScope.initialize = function() {
    // $resource('json/club.json').get({}, function(service) {
    // $resource('json/nail.json').get({},function(service){
    $resource('json/readingRoom.json').get({},function(service){
      $rootScope.service = service;

    });
  }
  $rootScope.initialize();




  if (storageS.get('is_auto_login')) {
    $rootScope.user = storageS.get('user');
  } else {
    $rootScope.user = null;
  }


  });
