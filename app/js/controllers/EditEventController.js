(function () {
  'use strict';

  eventsApp.controller('EditEventController', EditEventController);

  EditEventController.$inject = ['$scope', 'eventData'];

  function EditEventController($scope, eventData) {

    $scope.saveEvent = function (event, eventForm) {
      if (eventForm.$valid) {
        eventData.saveEvent(event)
          .$promise.then(
            function (response) { console.log('success', response); },
            function (response) { console.log('failure', response); }
          );
      }
    }

    $scope.cancelEdit = function () {
      window.location = "/EventDetails.html";
    }

    activate();

    function activate() { }
  }
})();
