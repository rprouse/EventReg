(function () {
  'use strict';

  eventsApp.controller('EditEventController', EditEventController);

  EditEventController.$inject = ['$scope'];

  function EditEventController($scope) {

    $scope.saveEvent = function (event, eventForm) {
      //console.log(eventForm);
      if (eventForm.$valid) {
        alert(event.name);
      }
    }

    $scope.cancelEdit = function() {
      window.location = "/EventDetails.html";
    }

    activate();

    function activate() { }
  }
})();
