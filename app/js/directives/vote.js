(function () {
  'use strict';

  eventsApp.directive('vote', vote);

  vote.$inject = [];

  function vote() {
    // Usage:
    //     <vote></vote>
    // Creates:
    // 
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'templates/directives/vote.html',
      scope: {
        upvote: "&",
        downvote: "&",
        count: "="
      }
    };
  }

})();