(function () {
  'use strict';

  eventsApp.factory('eventData', EventData);
  
  EventData.$inject = ['$resource'];

  function EventData($resource) {
    return {
      getEvent: function (id) {
        return $resource('/data/event/:id', { id: '@id' }).get({ id: id });
      }
    };
  };
})();