/**
 * Created by Jackey Li on 2015/8/5.
 */
(function (angular) {
    'use strict';
    angular.module(globalSettings.appName).controller('tweetController',
        ['$scope', 'basicControllerService', 'platformModal',
            function ($scope, basicControllerService, platformModal) {
                //basicControllerService.initController($scope);


                $scope.modalFn = {
                    openModal: function () {
                        platformModal.openModal({
                            templateUrl: 'js/tweet/templates/add-tweet.html',
                            scope: $scope
                        });
                    },
                    hideModal: platformModal.hideModal
                };

                $scope.$on('$destroy', function () {
                    $scope.modal.remove();
                })
            }]);
})(angular);