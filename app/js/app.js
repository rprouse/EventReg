'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute', 'ui.bootstrap'])
  .config(function($routeProvider) {
    $routeProvider.when('/newEvent',
    {
      templateUrl: 'templates/NewEvent.html',
      controller: 'EditEventController'
    });
});


