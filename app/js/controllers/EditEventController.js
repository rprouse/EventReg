(function () {
  'use strict';

  eventsApp.controller('EditEventController', EditEventController);

  EditEventController.$inject = ['$scope'];

  function EditEventController($scope) {

    $scope.saveEvent = function(event) {
      alert(event.name);
    }

    $scope.cancelEdit = function() {
      window.location = "/EventDetails.html";
    }

    activate();

    function activate() { }
  }
})();
