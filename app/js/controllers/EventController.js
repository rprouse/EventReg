(function () {

  eventsApp.controller('EventController', function($scope) {
    $scope.event = {
      name: 'CoderCamp 21',
      date: '18/11/2014',
      time: '6:30 pm',
      location: {
        address: 'Augusta St',
        city: 'Hamilton',
        province: 'ON'
      },
      imageUrl: 'http://www.softwarehamilton.com/wp-content/uploads/2014/01/swhamsmall.jpg',
      sessions: [
        {
          name: 'Introduction to HTML',
          creatorName: 'Bob Smith',
          duration: '30 mins',
          level: 'Introductory',
          abstract: 'In this sesion, you will learn to love angle brackets',
          upVoteCount: 0
        }, {
          name: 'Node.js for .NET Developers',
          creatorName: 'Joanne Jones',
          duration: '1 hour',
          level: 'Intermediate',
          abstract: 'Any web developer worth their salt is using Node.js these days',
          upVoteCount: 0
        }, {
          name: 'JQuery Fundementals',
          creatorName: 'Gary White',
          duration: '2 hours',
          level: 'Intermediate',
          abstract: 'A quick dive into using JQuery',
          upVoteCount: 0
        }
      ]
    };

    $scope.upVoteSession = function (session) {
      session.upVoteCount++;
    }

    $scope.downVoteSession = function (session) {
      session.upVoteCount--;
    }
  });

}).call(this);
