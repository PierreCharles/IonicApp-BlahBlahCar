angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      .state('tabsController.search', {
    url: '/search',
    views: {
      'tab1': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('tabsController.announces', {
    url: '/announces',
    views: {
      'tab2': {
        templateUrl: 'templates/announces.html',
        controller: 'announcesCtrl'
      }
    }
  })

  .state('tabsController.proposeARide', {
    url: '/propose',
    views: {
      'tab3': {
        templateUrl: 'templates/proposeARide.html',
        controller: 'proposeARideCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('profil', {
    url: '/profil',
    templateUrl: 'templates/profil.html',
    controller: 'profilCtrl'
  })
$urlRouterProvider.otherwise('/page1/search')

  

});