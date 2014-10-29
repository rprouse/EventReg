'use strict';

eventsApp.controller('EventController',
  function EventController($scope) {
    $scope.event = {
      name: 'CoderCamp 21',
      date: '18/11/2014',
      time: '6:30 pm',
      location: {
        address: 'Augusta St',
        city: 'Hamilton',
        province: 'ON'
      },
      imageUrl: 'http://www.softwarehamilton.com/wp-content/uploads/2014/01/swhamsmall.jpg'
    }
});