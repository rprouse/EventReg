(function () {
  'use strict';

  eventsApp.factory('eventData', EventData);
  
  EventData.$inject = ['$http', '$log'];

  function EventData($http, $log) {
    return {
      getEvent: function(successCallback) {
        $http({ method: 'GET', url: '/data/event/5' }).
          success(function (data, status, headers, config) {
            $log.info(data, status, headers(), config);
            successCallback(data);
          }).
          error(function(data, status, headers, config) {
            $log.warn(data, status, headers(), config);
          });
      }
    };
  };
})();