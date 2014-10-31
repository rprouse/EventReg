(function () {
  'use strict';

  eventsApp.factory('gravatarUrlBuilder', GravatarUrlBuilder);

  GravatarUrlBuilder.$inject = [];

  function GravatarUrlBuilder() {
    var service = {
        buildGravatarUrl: function(email) {
          var defaultGravatarUrl = "http://www.gravatar.com/avatar/000?s=200";

          var regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/;
          if (!regex.test(email))
            return defaultGravatarUrl;

          return 'http://www.gravatar.com/avatar/' + CryptoJS.MD5(email) + '.jpg?s=200&r=g';
        }
    };

    return service;
  }
})();