/**
 * Created by Jackey Li on 2015/8/16.
 */
(function (angular) {
    'use strict';

    /*
     * change language controller
     */
    angular.module(globalSettings.appName).controller('changeLanguageController',
        ['$scope', '$state',
            function ($scope, $state) {
                $scope.back = function () {
                    $state.go('tab.setting');
                };
            }]);
})(angular);