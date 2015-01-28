angular.module('app')
    .controller('HomeController', function ($scope, resolvedVal) {
        $scope.technologies = ['jQuery', 'AngularJS', 'Compass'];
        console.log(resolvedVal);
    })
    .controller("CreatorController", function($scope, $routeParams) {
    $scope.param = $routeParams.param;
	});