(function () {
  'use strict';

  eventsApp.directive('eventThumbnail', eventThumbnail);

  eventThumbnail.$inject = [];

  function eventThumbnail() {
    // Usage:
    //     <event-thumbnail />
    // Creates:
    // 
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/directives/EventThumbnail.html'
    };
  }

})();