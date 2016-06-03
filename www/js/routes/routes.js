angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'views/login/login.html',
    controller:'loginController'
  })

  .state('forgot', {
    url: '/forgot',
    templateUrl: 'views/forgot/forgot.html',
    controller:'forgotController'
  })
      
  .state('register', {
    url: '/register',
    templateUrl: 'views/register/register.html',
    controller:'registerController'
  })
      
  .state('home', {
    url: '/home',
    templateUrl: 'views/home/home.html',
    controller:'homeController'
  })

      .state('tabsController', {
        url: '/page1',
        templateUrl: 'views/tabscontroller/tabsController.html',
        abstract:true
      })


      .state('tabsController.search', {
     url: '/search',
     views: {
       'tab1': {
         templateUrl: 'views/search/search.html',
         controller: 'searchController'
       }
     }
   })

      .state('tabsController.announces', {
        url: '/announces',
        views: {
          'tab2': {
            templateUrl: 'views/announces/announces.html',
            controller: 'announcesController'
          }
        }
      })

      .state('tabsController.proposeARide', {
        url: '/propose',
        views: {
          'tab3': {
            templateUrl: 'views/propose/proposeARide.html',
            controller: 'proposeController'
          }
        }
      })

$urlRouterProvider.otherwise('/login')

  

});
