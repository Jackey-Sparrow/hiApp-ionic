/**
 * Created by Jackey Li on 2015/8/7.
 */
(function (angular) {
    'use strict';

    angular.module(globalSettings.appName).factory('basicControllerService',
        ['$ionicLoading', '$ionicPopup', '$ionicModal',
            function ($ionicLoading, $ionicPopup, $ionicModal) {
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
                    }

                    //show dialog
                    //todo:translate
                    $scope.showMessage = function () {
                        $scope.popUp = $ionicPopup.alert({
                            title: 'error',
                            template: '<div class="messageBody">connect error</div>',
                            scope: $scope
                        });
                    };

                    //modal
                    $ionicModal.fromTemplateUrl('js/tweet/templates/add-tweet.html', {
                        scope: $scope,
                        animation: 'slide-in-up'
                    }).then(function (modal) {
                        $scope.modal = modal;
                    });
                    $scope.openModal = function () {
                        $scope.modal.show();
                    };
                    $scope.closeModal = function () {
                        $scope.modal.hide();
                    };

                    //destroy
                    $scope.$on('$destroy', function () {
                        if ($scope.popUp) {
                            $scope.popUp.remove();
                        }
                        if ($scope.modal) {
                            $scope.modal.remove();
                        }
                    });
                };


                return service;
            }]);
})(angular);