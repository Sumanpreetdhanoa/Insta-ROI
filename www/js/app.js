// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
/*angular.module('starter', ['ionic', 'firebase'])

  .controller('firebaseCtl', function ($scope, $firebaseObject) {
    $scope.initializeFirebase = function(){
      var ref = new Firebase("https://fir-2e110.firebaseio.com/projects/" + $scope.sKey + "/");
      $scope.albums = $firebaseObject(ref);  
    }

    $scope.sKey = localStorage.getItem("sMD5");
    if($scope.sKey != null){
      $scope.initializeFirebase();
    }

    $scope.model = {};

    $scope.initializeStorage = function () {
      sMd5 = CryptoJS.MD5($scope.model.uname + $scope.model.password + "topSecret");
      localStorage.setItem("sMD5", sMd5);
      $scope.sKey = localStorage.getItem("sMD5");
      $scope.initializeFirebase();
    }

*/


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })


  .state('tab.contact', {
    url: '/contact',
    views: {
      'tab-contact': {
        templateUrl: 'templates/tab-contact.html',
        controller: 'ContactCtrl'
      }
    }
  })

  .state('tab.elements', {
    url: '/elements',
    views: {
      'tab-elements': {
        templateUrl: 'templates/tab-elements.html',
        controller: 'ElementsCtrl'
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
