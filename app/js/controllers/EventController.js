(function() {

  eventsApp.controller('EventController', EventController);

  EventController.$inject = ['$scope', 'eventData'];

  function EventController($scope, eventData) {

    $scope.sortorder = 'name';

    eventData.getEvent(6)
      .$promise.then(
        function (event) { $scope.event = event; },
        function (response) { console.log(response); }
      );

    $scope.upVoteSession = function(session) {
      session.upVoteCount++;
    }

    $scope.downVoteSession = function(session) {
      session.upVoteCount--;
    }
  }
})();
