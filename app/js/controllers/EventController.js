(function() {

  eventsApp.controller('EventController', EventController);

  EventController.$inject = ['$scope', 'eventData'];

  function EventController($scope, eventData) {

    $scope.sortorder = 'name';

    eventData.getEvent().then(
      function (event) { $scope.event = event; },
      function (status) { console.log(status); }
    );

    $scope.upVoteSession = function(session) {
      session.upVoteCount++;
    }

    $scope.downVoteSession = function(session) {
      session.upVoteCount--;
    }
  }
})();
