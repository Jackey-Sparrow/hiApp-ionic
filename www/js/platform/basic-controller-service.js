/**
 * Created by Jackey Li on 2015/8/7.
 */
(function (angular) {
    'use strict';

    /*
     * basic controller service
     */
    angular.module(globalSettings.appName).factory('basicControllerService',
        ['$ionicLoading', '$ionicPopup',
            function ($ionicLoading, $ionicPopup) {
                var service = {};

                /*
                 * provide some basic function
                 */
                service.initController = function ($scope) {

                    //show loading
                    $scope.showLoading = function () {
                        $ionicLoading.show({
                            template: '<ion-spinner class="spinner-light"></ion-spinner>'
                        });
                    };

                    //hide loading
                    $scope.hideLoading = function () {
                        $ionicLoading.hide();
                    };

                    /*
                     * show message
                     */
                    $scope.showMessage = function (title, message) {
                        $scope.popUp = $ionicPopup.alert({
                            title: title,
                            template: '<div class="messageBody">' + message + '</div>',
                            scope: $scope
                        });
                    };


                    //destroy
                    $scope.$on('$destroy', function () {
                        if ($scope.popUp) {
                            $scope.popUp.remove();
                        }

                    });
                };


                return service;
            }]);
})(angular);