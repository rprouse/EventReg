(function() {

  eventsApp.controller('EventController', EventController);

  EventController.$inject = ['$scope', 'eventData'];

  function EventController($scope, eventData) {

    $scope.sortorder = 'name';

    eventData.getEvent(function(event) {
      $scope.event = event;
    });

    $scope.upVoteSession = function(session) {
      session.upVoteCount++;
    }

    $scope.downVoteSession = function(session) {
      session.upVoteCount--;
    }
  }
})();
