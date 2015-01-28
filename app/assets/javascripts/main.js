(function(){
    'use strict';

    angular.module('app', ['ngRoute'])
        .config(function($routeProvider){
            $routeProvider
                .when('/', {
                    controller: 'HomeController',
                    templateUrl: 'assets/views/home.html',
                    resolve: {
                        resolvedVal: function() {
                            console.log('a');
                            return 'Karl';
                        }
                    }
                })
                .when('/creator/:param', {
                    controller: 'CreatorController',
                    templateUrl: 'assets/views/creator.html'
                })
                .when("/fail", {
                    templateUrl: "assets/views/error.html"
                })
                .otherwise({
                    redirectTo: '/fail'
                });
        });
}());
