angular.module('app.routes', [])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'loginController'
            })
            
            .state('forgot', {
                url: '/forgot',
                templateUrl: 'views/forgot.html',
                controller: 'forgotController'
            })

            .state('register', {
                url: '/register',
                templateUrl: 'views/register.html',
                controller: 'registerController'
            })

            .state('menu', {
                url: '/page',
                templateUrl: 'views/menu.html',
                abstract: true
            })

            .state('menu.search', {
                url: '/search',
                views: {
                    'tab1': {
                        templateUrl: 'views/search.html',
                        controller: 'searchController'
                    }
                }
            })

            .state('menu.announces', {
                url: '/announces',
                views: {
                    'tab2': {
                        templateUrl: 'views/announces.html',
                        controller: 'announcesController'
                    }
                }
            })

            .state('menu.propose', {
                url: '/propose',
                views: {
                    'tab3': {
                        templateUrl: 'views/propose.html',
                        controller: 'proposeController'
                    }
                }
            })

            .state('menu.profile', {
                url: '/profile',
                views: {
                    'tab4': {
                        templateUrl: 'views/profile.html',
                        controller: 'profileController'
                    }
                }
            })

        $urlRouterProvider.otherwise('/login')

    });
