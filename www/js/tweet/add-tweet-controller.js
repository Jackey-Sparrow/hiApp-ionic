/**
 * Created by Jackey Li on 2015/8/8.
 */
(function (angular) {
    'use strict';
    angular.module(globalSettings.appName).controller('addTweetController',
        ['$scope', function ($scope) {
            $scope.title = 'add tweet';
            $scope.back = function(){
                $scope.modalTest.hideModal();
            };
        }]);
})(angular);