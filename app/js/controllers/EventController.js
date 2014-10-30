(function () {

  eventsApp.controller('EventController', function ($scope) {

    $scope.sortorder = 'name';

    $scope.event = {
      name: 'CoderCamp 21',
      date: 1421989200000,
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
          duration: 1,
          level: 'Introductory',
          abstract: 'In this sesion, you will learn to love angle brackets',
          upVoteCount: 0
        }, {
          name: 'Node.js for .NET Developers',
          creatorName: 'Joanne Jones',
          duration: 2,
          level: 'Intermediate',
          abstract: 'Any web developer worth their salt is using Node.js these days',
          upVoteCount: 0
        }, {
          name: 'JQuery Fundementals',
          creatorName: 'Gary White',
          duration: 1,
          level: 'Intermediate',
          abstract: 'A quick dive into using JQuery',
          upVoteCount: 0
        }, {
          name: 'JQuery Deep Dive',
          creatorName: 'Gary White',
          duration: 4,
          level: 'Advanced',
          abstract: 'Continuing from his first session, Gary takes a deep dive into JQuery',
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
