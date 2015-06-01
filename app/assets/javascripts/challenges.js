var appChallenge = angular.module('appChallenge', [])
  .controller('UserCtrl', ['$scope', 'User', function ($scope, User) {
    $scope.init = function () {
      $scope.user = $.extend($scope.user, {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
      });
      // controls what the user sees. not ideal, I should use angulars routes, but I'm doing this kindof quickly
      $scope.statusClass = 'logged-out';
      $scope.checkAuthentication();
    };
    $scope.extractAndShowMessages = function (data) {
      // General errors. If we were to implement login functionality, those messages would be general messages, not element-specific.
      if (typeof data == 'object' && typeof data.messages == 'object' && data.messages.length > 0) {
        $.each(data.messages, function (i, e) {
          alert(e[1]);
        });
      }
      // Errors specific to form elements
      if (typeof data == 'object' && typeof data.errors == 'object' && Object.keys(data.errors).length > 0) {
        $.each(data.errors, function (i, e) {
          var elem = $('[name="user[' + i + ']"]');
          var parent = elem.parents('.input-field').addClass('invalid');
          var labelText = parent.children('label').text();
          $.each(e, function () {
            $('<span></span>').text(labelText + ' ' + this).insertAfter(elem);
          });
        });
      }
      if (typeof data == 'object' && typeof data.error == 'string') {
        alert(data.error);
      }
    };


    $scope.submitUser = function ($event) {
      $('.input-field').removeClass('invalid').children('span').remove();
      User.create({user: $scope.user})
        .then(function (data) {
          $scope.extractAndShowMessages(data);
          $scope.applyAuthentication(data);
        }, $scope.extractAndShowMessages);
      $event.preventDefault();
    };

    $scope.applyAuthentication = function (user) {
      if (angular.isObject(user)) {
        $scope.user = user;
        $scope.statusClass = 'logged-in';
      }
      else {
        $scope.user = {
          first_name: '',
          last_name: '',
          username: '',
          email: '',
          password: '',
          password_confirmation: ''
        };
        $scope.statusClass = 'logged-out';

        // Reset Materialize to initial state
        $('input').change();
      }
    }
    $scope.checkAuthentication = function () {
      $scope.statusClass = '';
      User.retrieve()
        .then(function (data) {
          $scope.applyAuthentication(data);
        })
    };
    $scope.logout = function($event){
      $scope.statusClass = '';
      User.logout()
        .then(function (data) {
          $scope.applyAuthentication(data);
        });
      $event.preventDefault();
    };
    $scope.init();
  }])
  .service('User', ['$http', '$q', function ($http, $q) {
    var User = this;
    User.create = function (formData) {
      var args = formData;
      var defer = $q.defer();

      $http.post('/users/', args, {headers: {'Accept': 'application/json'}})
        .success(function (data) {
          defer.resolve(data)
        })
        .error(function (error) {
          defer.reject(error);
        });
      return defer.promise;
    };
    User.retrieve = function () {
      var defer = $q.defer();
      $http.get('/check-authentication', {headers: {'Accept': 'application/json'}})
        .success(function (data) {
          defer.resolve(data);
        })
        .error(function (error) {
          defer.reject(error);
        });
      return defer.promise;
    };
    User.logout = function () {
      var defer = $q.defer();
      $http.delete('/users/sign_out', {headers: {'Accept': 'application/json'}})
        .success(function (data) {
          defer.resolve(data);
        })
        .error(function (error) {
          defer.reject(error);
        });
      return defer.promise;
    };
  }]);


// // VERY FRUSTRATING!
// // I thought I could force materialize to do a tooltip programatically. I could not... sad day
//$.fn.materializeTooltip = function (message) {
//  if(typeof message != 'string')return false;
//  return this.each(function(){
//    var boundEvents = $._data(this, 'events');
//    var elem = $(this);
//    if (typeof boundEvents != 'object' || typeof boundEvents.mouseover != 'object')elem.tooltip();
//    // For some reason materializeCSS uses the actual attribute 'data-tooltip', rather than the element's data('tooltip'). So, I'm going to do both since using data() is the best practice, IMO
//    elem.data('tooltip', message)
//      .attr('data-tooltip', message)
//      .data('position', 'top')
//      .attr('data-position', 'top')
//      .addClass('tooltipped')
//      .addClass('invalid');
//      //.trigger('mouseover');
//
//    // It looks like materialize is using some ridiculous event-counting. because of this, hovering over the element in question before `elem.trigger('mouseout');` is triggered results in the tooltip to be there permanently... Absurd, I say!
//    //setTimeout(function(){
//    //  if(!elem.is(':hover')){
//    //    elem.trigger('mouseout');
//    //  }
//    //}, 1000);
//  });
//};