'use strict';

angular.module('angularMeetupApp').
    factory('apiService', function($resource) {
      var band = $resource('/bands/:id', {}, {
        update: {
          method: 'PUT'
        }
      });

      var member = $resource('/members/:id', {}, {
        update: {
          method: 'PUT'
        }
      });
      var album = $resource('/albums/:id', {}, {
        update: {
          method: 'PUT'
        }
      });

      return {
        album: album,
        band: band,
        member: member
      };
    });
