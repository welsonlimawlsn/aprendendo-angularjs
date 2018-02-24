//var app = angular.module("myApplication", []);
app.controller("myController", function($scope) {
    $scope.firstName = "Welson";
    $scope.lastName = "Teles";
    $scope.fullName = function(){
        return $scope.firstName + " " + $scope.lastName;
    }
});