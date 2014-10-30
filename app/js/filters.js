'use strict';

eventsApp.filter('durations', function () {
  return function (duration) {
    switch (duration) {
      case 1:
        return "1 Hour";
      case 2:
        return "2 Hours";
      case 3:
        return "Half-Day";
      case 4:
        return "Full-Day";
      default:
        return "TBA";
    }
  }
});