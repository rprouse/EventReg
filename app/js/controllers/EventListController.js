(function () {
  'use strict';

  eventsApp.controller('EventListController', EventListController);

  EventListController.$inject = ['$scope', '$location', 'eventData'];

  function EventListController($scope, $location, eventData) {
    eventData.getAllEvents()
      .$promise.then(
        function(events) { $scope.events = events; },
        function(response) { console.log(response); }
      );

    $scope.navigateToDetails = function (event) {
      $location.url('/event/' + event.id);
    };
  }

})();