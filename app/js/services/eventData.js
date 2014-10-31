(function () {
  'use strict';

  eventsApp.factory('eventData', EventData);
  
  EventData.$inject = ['$resource'];

  function EventData($resource) {
    var resource = $resource('/data/event/:id', { id: '@id' });

    return {
      getEvent: function (id) {
        return resource.get({ id: id });
      },
      saveEvent: function (event) {
        // TODO: We need to add an id
        event.id = 999;
        return resource.save(event);
      }
    };
  };
})();