/**
 * Created by Jackey Li on 2015/8/5.
 */
(function (angular) {
    'use strict';

    /*
     * tweet controller
     */
    angular.module(globalSettings.appName).controller('tweetController',
        ['$scope', 'basicControllerService', 'platformModal', 'tweetService', '$translate',
            function ($scope, basicControllerService, platformModal, tweetService, $translate) {

                //translate
                $scope.tweetTranslate = {
                    like: $translate.instant('tweet.like'),
                    comments: $translate.instant('tweet.comments'),
                    comment: $translate.instant('tweet.comment'),
                    share: $translate.instant('tweet.share'),
                    tweetName: $translate.instant('tweet.tweetName')
                };

                /*
                 * list
                 */
                $scope.list = tweetService.getList();

                /*
                 * add tweet modal
                 */
                $scope.modalFn = {
                    openModal: function () {
                        platformModal.openModal({
                            templateUrl: 'js/tweet/templates/add-tweet.html',
                            scope: $scope
                        });
                    },
                    hideModal: platformModal.hideModal
                };

                /*
                 * destroy
                 */
                $scope.$on('$destroy', function () {
                    $scope.modal.remove();
                })
            }]);
})(angular);