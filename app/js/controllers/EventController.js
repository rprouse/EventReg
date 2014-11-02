﻿(function () {

  eventsApp.controller('EventController', EventController);

  EventController.$inject = ['$scope', '$anchorScroll', 'eventData'];

  function EventController($scope, $anchorScroll, eventData) {

    $scope.sortorder = 'name';
    $scope.alerts = [];

    $scope.addAlert = function (message, type) {
      $scope.alerts.push({ msg: message, type: type });
    }

    $scope.closeAlert = function (index) {
      $scope.alerts.splice(index, 1);
    };

    eventData.getEvent(1)
      .$promise.then(
        function (event) {
          $scope.invalid = false;
          $scope.event = event;
        },
        function (response) {
          $scope.invalid = true;
          var msg = 'Could not fetch event: ' + response.status + ' - ' + response.statusText;
          $scope.addAlert(msg, 'danger');
        }
      );

    $scope.upVoteSession = function (session) {
      session.upVoteCount++;
    }

    $scope.downVoteSession = function (session) {
      session.upVoteCount--;
    }

    $scope.scrollToSession = function() {
      $anchorScroll();
    }
  }
})();
